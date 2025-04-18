import type { TypeNode } from '../../../compiler';
import { compiler, type Property } from '../../../compiler';
import type { TypeScriptFile } from '../../../generate/files';
import type { IR } from '../../../ir/types';
import { escapeComment } from '../../../utils/escape';
import { stringCase } from '../../../utils/stringCase';
import {
  irParametersToIrSchema,
  schemaToType,
} from '../../@hey-api/typescript/plugin.js';
import {
  importIdentifierData,
  importIdentifierError,
  importIdentifierResponse,
} from '../../@hey-api/typescript/ref';
import type { Plugin } from '../../types';
import type { Config } from './types';

/**
 * Determines if an operation should be a query or mutation
 */
export const isQuery = (
  operation: IR.OperationObject,
  plugin: Plugin.Instance<Config>,
): boolean => {
  // 1. Check for hook override
  const hookResult = plugin?.resolveQuery?.(operation);
  if (hookResult !== undefined) {
    return hookResult;
  }

  // 2. Use method as primary signal
  if (['get', 'head', 'options'].includes(operation.method)) {
    return true;
  }

  // 3. Consider body presence as secondary signal
  // If method is not GET/HEAD/OPTIONS but also has no body schema, likely a query
  return !operation.body?.schema;
};

/**
 * Generates the cache configuration object for a query
 */
export const generateCacheConfig = (
  operation: IR.OperationObject,
  plugin: Plugin.Instance<Config>,
) => {
  const obj: Array<{
    key: string;
    value: any;
  }> = [];

  // Use default stale time if specified in config
  if (plugin.defaultStaleTime !== undefined) {
    obj.push({
      key: 'staleTime',
      value: plugin.defaultStaleTime,
    });
  }

  // Use default cache time if specified in config
  if (plugin.defaultCacheTime !== undefined) {
    obj.push({
      key: 'gcTime',
      value: plugin.defaultCacheTime,
    });
  }

  // Add pagination config if enabled and operation has pagination parameters
  if (
    plugin.enablePaginationOnKey &&
    hasPagination(operation, plugin.enablePaginationOnKey)
  ) {
    obj.push({
      key: 'infinite',
      value: true,
    });
  }

  return obj;
};

/**
 * Checks if operation has pagination parameters
 */
export const hasPagination = (
  operation: IR.OperationObject,
  paginationParam: string,
): boolean =>
  // Check if operation has pagination parameter
  !!operation.parameters?.query?.[paginationParam] ||
  !!operation.body?.pagination;

/**
 * Generates the function name for an operation
 */
export const generateFunctionName = (
  operation: IR.OperationObject,
  isQueryType: boolean,
  prefixUse: boolean = true,
  suffixQueryMutation: boolean = true,
): string => {
  const operationPascalCase = stringCase({
    case: 'PascalCase',
    value: operation.id,
  });
  const prefix = prefixUse ? 'use' : '';
  const suffix = suffixQueryMutation
    ? isQueryType
      ? 'Query'
      : 'Mutation'
    : '';
  return `${prefix}${operationPascalCase}${suffix}`;
};

const parametersPluralizedNames = [
  'query',
  'path',
  'headers',
  'body',
  'cookies',
] as const;
type ParamNames = (typeof parametersPluralizedNames)[number];
// Define a conditional type to transform the names
type NonPluralizedName<T extends ParamNames> = T extends 'headers'
  ? 'header'
  : T extends 'cookies'
    ? 'cookie'
    : T;
function getNonPluralizedName<T extends ParamNames>(
  name: T,
): NonPluralizedName<T> {
  return (
    ['headers', 'cookies'].includes(name) ? name.slice(0, -1) : name
  ) as NonPluralizedName<T>;
}
type DataKeyNames = Exclude<ParamNames, 'cookies'>;
function getDataSubType(identifier: string, dataKey: DataKeyNames) {
  return compiler.indexedAccessTypeNode({
    indexType: compiler.literalTypeNode({
      literal: compiler.stringLiteral({
        text: dataKey,
      }),
    }),
    objectType: compiler.typeReferenceNode({
      typeName: identifier,
    }),
  });
}

function createParameterConst(
  name: ParamNames,
  operation?: IR.OperationObject,
) {
  const nonPluralizedName = getNonPluralizedName(name);
  if (nonPluralizedName === 'body' && !operation?.body?.schema) return [];
  if (
    nonPluralizedName !== 'body' &&
    !operation?.parameters?.[nonPluralizedName]
  )
    return [];
  return [
    compiler.constVariable({
      expression: compiler.callExpression({
        functionName: 'toRef',
        parameters: [getParameterQualifiedName(name)],
      }),
      name: `${name}Ref`,
    }),
  ];
}
function getParameterQualifiedName(name: ParamNames) {
  return compiler.propertyAccessExpression({
    expression: 'params',
    isOptional: true,
    name,
  });
}
/**
 * Creates a composable function for an operation
 */
export const createComposable = ({
  context,
  file,
  isQuery,
  operation,
  plugin,
}: {
  context: IR.Context;
  file: TypeScriptFile;
  isQuery: boolean;
  operation: IR.OperationObject;
  plugin: Plugin.Instance<Config>;
}) => {
  // Import necessary functions and types
  file.import({
    module: '@pinia/colada',
    name: isQuery ? 'useQuery' : 'useMutation',
  });
  file.import({
    asType: true,
    module: '@pinia/colada',
    name: `Use${isQuery ? 'Query' : 'Mutation'}Options`,
  });
  file.import({
    module: 'vue',
    name: 'toRef',
  });

  // Get query key from hooks or generate default
  const queryKey = plugin?.resolveQueryKey?.(operation) ?? [
    operation.tags?.[0] || 'default',
    operation.id,
  ];

  // Get identifiers for data, response and error types
  const identifierData = importIdentifierData({ context, file, operation });
  const identifierResponse = importIdentifierResponse({
    context,
    file,
    operation,
  });
  const identifierError = importIdentifierError({ context, file, operation });

  /**
   * Creates a parameter for a composable function
   */
  function createParameter(
    name: ParamNames,
    operation?: IR.OperationObject,
  ): Property[] {
    const nonPluralizedName = getNonPluralizedName(name);
    if (nonPluralizedName === 'body' && !operation?.body?.schema) return [];
    if (
      nonPluralizedName !== 'body' &&
      !operation?.parameters?.[nonPluralizedName]
    )
      return [];
    let type: TypeNode = compiler.keywordTypeNode({
      keyword: 'unknown',
    });
    if (nonPluralizedName === 'cookie') {
      type =
        schemaToType({
          context,
          namespace: [],
          plugin: plugin as any,
          schema: irParametersToIrSchema({
            parameters: operation?.parameters?.cookie || {},
          }),
          state: undefined,
        }) ?? type;
    } else if (name !== 'cookies') {
      type = identifierData.name
        ? getDataSubType(identifierData.name, name)
        : type;
    }
    return [
      {
        name,
        type,
      },
    ];
  }
  const parameters = parametersPluralizedNames.flatMap((name) =>
    createParameter(name, operation),
  );

  // Create the composable function
  const node = compiler.constVariable({
    comment: [
      operation.deprecated && '@deprecated',
      operation.summary && escapeComment(operation.summary),
      operation.description && escapeComment(operation.description),
    ].filter(Boolean),
    exportConst: true,
    expression: compiler.arrowFunction({
      async: true,
      parameters: [
        {
          isRequired: parameters.length > 0,
          name: 'params',
          type: compiler.typeInterfaceNode({
            properties: parameters,
            useLegacyResolution: true,
          }),
        },
        // Additional Pinia Colada options
        {
          isRequired: false,
          name: 'options',
          type: compiler.typeReferenceNode({
            typeName: isQuery
              ? `UseQueryOptions<${identifierResponse.name || 'unknown'}, ${identifierError.name || 'unknown'}, ${identifierData.name || 'unknown'}>`
              : `UseMutationOptions<${identifierResponse.name || 'unknown'}, ${identifierData.name || 'unknown'}, ${identifierError.name || 'unknown'}>`,
          }),
        },
      ],
      statements: [
        // Create reactive refs for parameters
        ...parametersPluralizedNames.flatMap((name) =>
          createParameterConst(name, operation),
        ),

        // Create query/mutation result
        compiler.constVariable({
          expression: compiler.callExpression({
            functionName: isQuery ? 'useQuery' : 'useMutation',
            parameters: [
              compiler.objectExpression({
                obj: [
                  // Query/mutation function
                  {
                    key: isQuery ? 'query' : 'mutation',
                    value: compiler.callExpression({
                      functionName: '_heyApiClient',
                      parameters: [
                        compiler.objectExpression({
                          obj: [
                            {
                              key: 'method',
                              value: operation.method,
                            },
                            {
                              key: 'url',
                              value: operation.path,
                            },
                            // Add data if it's a valid body parameter (mutations only)
                            ...parametersPluralizedNames.flatMap((name) => {
                              const nonPluralizedName =
                                getNonPluralizedName(name);
                              if (
                                nonPluralizedName === 'body' &&
                                !operation?.body?.schema
                              )
                                return [];
                              if (
                                nonPluralizedName !== 'body' &&
                                !operation?.parameters?.[nonPluralizedName]
                              )
                                return [];
                              return [
                                {
                                  key:
                                    nonPluralizedName === 'body'
                                      ? 'data'
                                      : name,
                                  value: compiler.identifier({
                                    text: `${name}Ref`,
                                  }),
                                },
                              ];
                            }),
                          ].filter(Boolean),
                        }),
                      ],
                    }),
                  },
                  // Query key (optional for mutations)
                  {
                    key: 'key',
                    value: compiler.arrayLiteralExpression({
                      elements: [
                        ...queryKey.map((k: string) => compiler.ots.string(k)),
                        // Add path params to query key if they exist
                        ...parametersPluralizedNames.flatMap((name) => {
                          const nonPluralizedName = getNonPluralizedName(name);
                          if (
                            nonPluralizedName === 'body' &&
                            !operation?.body?.schema
                          )
                            return [];
                          if (
                            nonPluralizedName !== 'body' &&
                            !operation?.parameters?.[nonPluralizedName]
                          )
                            return [];
                          return [compiler.identifier({ text: `${name}Ref` })];
                        }),
                      ],
                    }),
                  },
                  // Spread additional options
                  {
                    spread: 'options',
                  },
                ],
              }),
            ],
          }),
          name: isQuery ? 'queryResult' : 'mutationResult',
        }),

        // Return useQuery/useMutation call with reactive parameters
        compiler.returnStatement({
          expression: compiler.objectExpression({
            obj: [
              // Spread the query/mutation result
              {
                spread: isQuery ? 'queryResult' : 'mutationResult',
              },
              // Return reactive parameters
              ...parametersPluralizedNames.flatMap((name) => {
                const nonPluralizedName = getNonPluralizedName(name);
                if (nonPluralizedName === 'body' && !operation?.body?.schema)
                  return [];
                if (
                  nonPluralizedName !== 'body' &&
                  !operation?.parameters?.[nonPluralizedName]
                )
                  return [];
                return [
                  {
                    key: name,
                    value: compiler.identifier({ text: `${name}Ref` }),
                  },
                ];
              }),
            ],
          }),
        }),
      ],
    }),
    name: generateFunctionName(
      operation,
      isQuery,
      plugin.prefixUse,
      plugin.suffixQueryMutation,
    ),
  });

  file.add(node);
};
