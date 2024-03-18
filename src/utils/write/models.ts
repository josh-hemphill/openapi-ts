import { writeFileSync } from 'node:fs';
import path from 'node:path';

import type { Client } from '../../client/interfaces/Client';
import type { Config } from '../../node';
import type { Templates } from '../registerHandlebarTemplates';

/**
 * Generate Models using the Handlebar template and write to disk.
 * @param client Client containing models, schemas, and services
 * @param templates The loaded handlebar templates
 * @param outputPath Directory to write the generated files to
 * @param options Options passed to the `generate()` function
 */
export const writeClientModels = async (
    client: Client,
    templates: Templates,
    outputPath: string,
    options: Pick<Required<Config>, 'client' | 'enums' | 'useDateType'>
): Promise<void> => {
    for (const model of client.models) {
        const file = path.resolve(outputPath, `${model.name}.ts`);
        const templateResult = templates.exports.model({
            $config: options,
            ...model,
        });
        await writeFileSync(file, templateResult);
    }
};