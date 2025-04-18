// This file is auto-generated by @hey-api/openapi-ts

import { useQuery, type UseQueryOptions } from '@pinia/colada';
import { toRef } from 'vue';
import type { CallWithNoContentResponseData } from '../../types.gen';
import { client } from '@pinia/colada/client';

export const useCallWithNoContentResponseQuery = async (params: {}, options?: UseQueryOptions<unknown, unknown, CallWithNoContentResponseData>) => {
    const query = useQuery({
        query: client({
            method: 'get',
            url: '/api/v{api-version}/no-content'
        }),
        key: [
            'NoContent',
            'callWithNoContentResponse'
        ],
        ...options
    });
    return {
        ...query
    };
};