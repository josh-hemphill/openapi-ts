// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options, formDataBodySerializer, urlSearchParamsBodySerializer } from '@hey-api/client-fetch';
import type { ExportData, ImportData, ImportResponse, ApiVVersionODataControllerCountData, ApiVVersionODataControllerCountResponse, GetApiVbyApiVersionSimpleOperationData, GetApiVbyApiVersionSimpleOperationError, GetApiVbyApiVersionSimpleOperationResponse, DeleteCallWithoutParametersAndResponseData, GetCallWithoutParametersAndResponseData, HeadCallWithoutParametersAndResponseData, OptionsCallWithoutParametersAndResponseData, PatchCallWithoutParametersAndResponseData, PostCallWithoutParametersAndResponseData, PutCallWithoutParametersAndResponseData, DeleteFooData3, CallWithDescriptionsData, DeprecatedCallData, CallWithParametersData, CallWithWeirdParameterNamesData, GetCallWithOptionalParamData, PostCallWithOptionalParamData, PostCallWithOptionalParamResponse, PostApiVbyApiVersionRequestBodyData, PostApiVbyApiVersionFormDataData, CallWithDefaultParametersData, CallWithDefaultOptionalParametersData, CallToTestOrderOfParamsData, DuplicateNameData, DuplicateName2Data, DuplicateName3Data, DuplicateName4Data, CallWithNoContentResponseData, CallWithNoContentResponseResponse, CallWithResponseAndNoContentResponseData, CallWithResponseAndNoContentResponseResponse, DummyAData, DummyAResponse, DummyBData, DummyBResponse, CallWithResponseData, CallWithResponseResponse, CallWithDuplicateResponsesData, CallWithDuplicateResponsesError, CallWithDuplicateResponsesResponse, CallWithResponsesData, CallWithResponsesError, CallWithResponsesResponse, CollectionFormatData, TypesData, TypesResponse, UploadFileData, UploadFileResponse, FileResponseData, FileResponseResponse, ComplexTypesData, ComplexTypesResponse, MultipartResponseData, MultipartResponseResponse, MultipartRequestData, ComplexParamsData, ComplexParamsResponse, CallWithResultFromHeaderData, TestErrorCodeData, NonAsciiæøåÆøÅöôêÊ字符串Data, NonAsciiæøåÆøÅöôêÊ字符串Response, PutWithFormUrlEncodedData } from './types.gen';

export const client = createClient(createConfig());

export const export_ = <ThrowOnError extends boolean = false>(options?: Options<ExportData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/no-tag'
    });
};

export const import_ = <ThrowOnError extends boolean = false>(options: Options<ImportData, ThrowOnError>) => {
    return (options?.client ?? client).post<ImportResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/api/v{api-version}/no-tag'
    });
};

export const apiVVersionODataControllerCount = <ThrowOnError extends boolean = false>(options?: Options<ApiVVersionODataControllerCountData, ThrowOnError>) => {
    return (options?.client ?? client).get<ApiVVersionODataControllerCountResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/simple/$count'
    });
};

export const getApiVbyApiVersionSimpleOperation = <ThrowOnError extends boolean = false>(options: Options<GetApiVbyApiVersionSimpleOperationData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetApiVbyApiVersionSimpleOperationResponse, GetApiVbyApiVersionSimpleOperationError, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/simple:operation'
    });
};

export const deleteCallWithoutParametersAndResponse = <ThrowOnError extends boolean = false>(options?: Options<DeleteCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/simple'
    });
};

export const getCallWithoutParametersAndResponse = <ThrowOnError extends boolean = false>(options?: Options<GetCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/simple'
    });
};

export const headCallWithoutParametersAndResponse = <ThrowOnError extends boolean = false>(options?: Options<HeadCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? client).head<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/simple'
    });
};

export const optionsCallWithoutParametersAndResponse = <ThrowOnError extends boolean = false>(options?: Options<OptionsCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? client).options<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/simple'
    });
};

export const patchCallWithoutParametersAndResponse = <ThrowOnError extends boolean = false>(options?: Options<PatchCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? client).patch<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/simple'
    });
};

export const postCallWithoutParametersAndResponse = <ThrowOnError extends boolean = false>(options?: Options<PostCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/simple'
    });
};

export const putCallWithoutParametersAndResponse = <ThrowOnError extends boolean = false>(options?: Options<PutCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? client).put<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/simple'
    });
};

export const deleteFoo = <ThrowOnError extends boolean = false>(options: Options<DeleteFooData3, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/foo/{foo_param}/bar/{BarParam}'
    });
};

export const callWithDescriptions = <ThrowOnError extends boolean = false>(options?: Options<CallWithDescriptionsData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/descriptions'
    });
};

/**
 * @deprecated
 */
export const deprecatedCall = <ThrowOnError extends boolean = false>(options: Options<DeprecatedCallData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/parameters/deprecated'
    });
};

export const callWithParameters = <ThrowOnError extends boolean = false>(options: Options<CallWithParametersData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/api/v{api-version}/parameters/{parameterPath}'
    });
};

export const callWithWeirdParameterNames = <ThrowOnError extends boolean = false>(options: Options<CallWithWeirdParameterNamesData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/api/v{api-version}/parameters/{parameter.path.1}/{parameter-path-2}/{PARAMETER-PATH-3}'
    });
};

export const getCallWithOptionalParam = <ThrowOnError extends boolean = false>(options: Options<GetCallWithOptionalParamData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/api/v{api-version}/parameters'
    });
};

export const postCallWithOptionalParam = <ThrowOnError extends boolean = false>(options: Options<PostCallWithOptionalParamData, ThrowOnError>) => {
    return (options?.client ?? client).post<PostCallWithOptionalParamResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/api/v{api-version}/parameters'
    });
};

export const postApiVbyApiVersionRequestBody = <ThrowOnError extends boolean = false>(options?: Options<PostApiVbyApiVersionRequestBodyData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/api/v{api-version}/requestBody'
    });
};

export const postApiVbyApiVersionFormData = <ThrowOnError extends boolean = false>(options?: Options<PostApiVbyApiVersionFormDataData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v{api-version}/formData'
    });
};

export const callWithDefaultParameters = <ThrowOnError extends boolean = false>(options?: Options<CallWithDefaultParametersData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/defaults'
    });
};

export const callWithDefaultOptionalParameters = <ThrowOnError extends boolean = false>(options?: Options<CallWithDefaultOptionalParametersData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/defaults'
    });
};

export const callToTestOrderOfParams = <ThrowOnError extends boolean = false>(options: Options<CallToTestOrderOfParamsData, ThrowOnError>) => {
    return (options?.client ?? client).put<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/defaults'
    });
};

export const duplicateName = <ThrowOnError extends boolean = false>(options?: Options<DuplicateNameData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/duplicate'
    });
};

export const duplicateName2 = <ThrowOnError extends boolean = false>(options?: Options<DuplicateName2Data, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/duplicate'
    });
};

export const duplicateName3 = <ThrowOnError extends boolean = false>(options?: Options<DuplicateName3Data, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/duplicate'
    });
};

export const duplicateName4 = <ThrowOnError extends boolean = false>(options?: Options<DuplicateName4Data, ThrowOnError>) => {
    return (options?.client ?? client).put<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/duplicate'
    });
};

export const callWithNoContentResponse = <ThrowOnError extends boolean = false>(options?: Options<CallWithNoContentResponseData, ThrowOnError>) => {
    return (options?.client ?? client).get<CallWithNoContentResponseResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/no-content'
    });
};

export const callWithResponseAndNoContentResponse = <ThrowOnError extends boolean = false>(options?: Options<CallWithResponseAndNoContentResponseData, ThrowOnError>) => {
    return (options?.client ?? client).get<CallWithResponseAndNoContentResponseResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/multiple-tags/response-and-no-content'
    });
};

export const dummyA = <ThrowOnError extends boolean = false>(options?: Options<DummyAData, ThrowOnError>) => {
    return (options?.client ?? client).get<DummyAResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/multiple-tags/a'
    });
};

export const dummyB = <ThrowOnError extends boolean = false>(options?: Options<DummyBData, ThrowOnError>) => {
    return (options?.client ?? client).get<DummyBResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/multiple-tags/b'
    });
};

export const callWithResponse = <ThrowOnError extends boolean = false>(options?: Options<CallWithResponseData, ThrowOnError>) => {
    return (options?.client ?? client).get<CallWithResponseResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/response'
    });
};

export const callWithDuplicateResponses = <ThrowOnError extends boolean = false>(options?: Options<CallWithDuplicateResponsesData, ThrowOnError>) => {
    return (options?.client ?? client).post<CallWithDuplicateResponsesResponse, CallWithDuplicateResponsesError, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/response'
    });
};

export const callWithResponses = <ThrowOnError extends boolean = false>(options?: Options<CallWithResponsesData, ThrowOnError>) => {
    return (options?.client ?? client).put<CallWithResponsesResponse, CallWithResponsesError, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/response'
    });
};

export const collectionFormat = <ThrowOnError extends boolean = false>(options: Options<CollectionFormatData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/collectionFormat'
    });
};

export const types = <ThrowOnError extends boolean = false>(options: Options<TypesData, ThrowOnError>) => {
    return (options?.client ?? client).get<TypesResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/types'
    });
};

export const uploadFile = <ThrowOnError extends boolean = false>(options: Options<UploadFileData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileResponse, unknown, ThrowOnError>({
        ...options,
        ...urlSearchParamsBodySerializer,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...options?.headers
        },
        url: '/api/v{api-version}/upload'
    });
};

export const fileResponse = <ThrowOnError extends boolean = false>(options: Options<FileResponseData, ThrowOnError>) => {
    return (options?.client ?? client).get<FileResponseResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/file/{id}'
    });
};

export const complexTypes = <ThrowOnError extends boolean = false>(options: Options<ComplexTypesData, ThrowOnError>) => {
    return (options?.client ?? client).get<ComplexTypesResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/complex'
    });
};

export const multipartResponse = <ThrowOnError extends boolean = false>(options?: Options<MultipartResponseData, ThrowOnError>) => {
    return (options?.client ?? client).get<MultipartResponseResponse, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/multipart'
    });
};

export const multipartRequest = <ThrowOnError extends boolean = false>(options?: Options<MultipartRequestData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/api/v{api-version}/multipart'
    });
};

export const complexParams = <ThrowOnError extends boolean = false>(options: Options<ComplexParamsData, ThrowOnError>) => {
    return (options?.client ?? client).put<ComplexParamsResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json-patch+json',
            ...options?.headers
        },
        url: '/api/v{api-version}/complex/{id}'
    });
};

export const callWithResultFromHeader = <ThrowOnError extends boolean = false>(options?: Options<CallWithResultFromHeaderData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/header'
    });
};

export const testErrorCode = <ThrowOnError extends boolean = false>(options: Options<TestErrorCodeData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/error'
    });
};

export const nonAsciiæøåÆøÅöôêÊ字符串 = <ThrowOnError extends boolean = false>(options: Options<NonAsciiæøåÆøÅöôêÊ字符串Data, ThrowOnError>) => {
    return (options?.client ?? client).post<NonAsciiæøåÆøÅöôêÊ字符串Response, unknown, ThrowOnError>({
        ...options,
        url: '/api/v{api-version}/non-ascii-æøåÆØÅöôêÊ字符串'
    });
};

/**
 * Login User
 */
export const putWithFormUrlEncoded = <ThrowOnError extends boolean = false>(options: Options<PutWithFormUrlEncodedData, ThrowOnError>) => {
    return (options?.client ?? client).put<unknown, unknown, ThrowOnError>({
        ...options,
        ...urlSearchParamsBodySerializer,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...options?.headers
        },
        url: '/api/v{api-version}/non-ascii-æøåÆØÅöôêÊ字符串'
    });
};