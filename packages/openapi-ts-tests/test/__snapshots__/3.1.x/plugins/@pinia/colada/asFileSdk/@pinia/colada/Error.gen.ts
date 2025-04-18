// This file is auto-generated by @hey-api/openapi-ts

import { useQuery, type UseQueryOptions } from '@pinia/colada';
import { toRef } from 'vue';
import type { TestErrorCodeData } from '../../types.gen';
import { client } from '@pinia/colada/client';

export const useTestErrorCodeQuery = async (params: {}, options?: UseQueryOptions<unknown, unknown, TestErrorCodeData>) => {
    const queryRef = toRef(params?.query);
    const query = useQuery({
        query: client({
            method: 'post',
            url: '/api/v{api-version}/error',
            queryRef
        }),
        key: [
            'Error',
            'testErrorCode',
            queryRef
        ],
        ...options
    });
    return {
        ...query,
        query: queryRef
    };
};