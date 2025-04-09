// This file is auto-generated by @hey-api/openapi-ts

import { useQuery, type UseQueryOptions } from '@pinia/colada';
import { toRef } from 'vue';
import type { FileResponseResponse, FileResponseData } from '../../types.gen';
import { client } from '@pinia/colada/client';

export const useFileResponseQuery = async (params: {}, options?: UseQueryOptions<FileResponseResponse, unknown, FileResponseData>) => {
    const pathRef = toRef(params?.path);
    const query = useQuery({
        query: client({
            method: 'get',
            url: '/api/v{api-version}/file/{id}',
            pathRef
        }),
        key: [
            'FileResponse',
            'fileResponse',
            pathRef
        ],
        ...options
    });
    return {
        ...query,
        path: pathRef
    };
};