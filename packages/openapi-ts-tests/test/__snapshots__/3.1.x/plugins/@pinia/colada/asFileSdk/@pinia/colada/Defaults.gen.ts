// This file is auto-generated by @hey-api/openapi-ts

import { useQuery, type UseQueryOptions } from '@pinia/colada';
import { toRef } from 'vue';
import type { CallWithDefaultParametersData, CallWithDefaultOptionalParametersData, CallToTestOrderOfParamsData } from '../../types.gen';
import { client } from '@pinia/colada/client';

export const useCallWithDefaultParametersQuery = async (params: {}, options?: UseQueryOptions<unknown, unknown, CallWithDefaultParametersData>) => {
    const queryRef = toRef(params?.query);
    const query = useQuery({
        query: client({
            method: 'get',
            url: '/api/v{api-version}/defaults',
            queryRef
        }),
        key: [
            'Defaults',
            'callWithDefaultParameters',
            queryRef
        ],
        ...options
    });
    return {
        ...query,
        query: queryRef
    };
};

export const useCallWithDefaultOptionalParametersQuery = async (params: {}, options?: UseQueryOptions<unknown, unknown, CallWithDefaultOptionalParametersData>) => {
    const queryRef = toRef(params?.query);
    const query = useQuery({
        query: client({
            method: 'post',
            url: '/api/v{api-version}/defaults',
            queryRef
        }),
        key: [
            'Defaults',
            'callWithDefaultOptionalParameters',
            queryRef
        ],
        ...options
    });
    return {
        ...query,
        query: queryRef
    };
};

export const useCallToTestOrderOfParamsQuery = async (params: {}, options?: UseQueryOptions<unknown, unknown, CallToTestOrderOfParamsData>) => {
    const queryRef = toRef(params?.query);
    const query = useQuery({
        query: client({
            method: 'put',
            url: '/api/v{api-version}/defaults',
            queryRef
        }),
        key: [
            'Defaults',
            'callToTestOrderOfParams',
            queryRef
        ],
        ...options
    });
    return {
        ...query,
        query: queryRef
    };
};