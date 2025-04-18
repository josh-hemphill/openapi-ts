// This file is auto-generated by @hey-api/openapi-ts

import { useQuery, type UseQueryOptions, useMutation, type UseMutationOptions } from '@pinia/colada';
import { toRef } from 'vue';
import type { DeleteFooData3, CallWithParametersData, CallWithWeirdParameterNamesData, GetCallWithOptionalParamData, PostCallWithOptionalParamResponse, PostCallWithOptionalParamData } from '../../types.gen';
import { client } from '@pinia/colada/client';

export const useDeleteFooQuery = async (params: {}, options?: UseQueryOptions<unknown, unknown, DeleteFooData3>) => {
    const pathRef = toRef(params?.path);
    const headersRef = toRef(params?.headers);
    const query = useQuery({
        query: client({
            method: 'delete',
            url: '/api/v{api-version}/foo/{foo_param}/bar/{BarParam}',
            pathRef,
            headersRef
        }),
        key: [
            'Parameters',
            'deleteFoo',
            pathRef,
            headersRef
        ],
        ...options
    });
    return {
        ...query,
        path: pathRef,
        headers: headersRef
    };
};

export const useCallWithParametersMutation = async (params: {}, options?: UseMutationOptions<unknown, CallWithParametersData, unknown>) => {
    const queryRef = toRef(params?.query);
    const pathRef = toRef(params?.path);
    const headersRef = toRef(params?.headers);
    const bodyRef = toRef(params?.body);
    const cookiesRef = toRef(params?.cookies);
    const mutation = useMutation({
        mutation: client({
            method: 'post',
            url: '/api/v{api-version}/parameters/{parameterPath}',
            queryRef,
            pathRef,
            headersRef,
            bodyRef,
            cookiesRef
        }),
        key: [
            'Parameters',
            'callWithParameters',
            queryRef,
            pathRef,
            headersRef,
            bodyRef,
            cookiesRef
        ],
        ...options
    });
    return {
        ...mutation,
        query: queryRef,
        path: pathRef,
        headers: headersRef,
        body: bodyRef,
        cookies: cookiesRef
    };
};

export const useCallWithWeirdParameterNamesMutation = async (params: {}, options?: UseMutationOptions<unknown, CallWithWeirdParameterNamesData, unknown>) => {
    const queryRef = toRef(params?.query);
    const pathRef = toRef(params?.path);
    const headersRef = toRef(params?.headers);
    const bodyRef = toRef(params?.body);
    const cookiesRef = toRef(params?.cookies);
    const mutation = useMutation({
        mutation: client({
            method: 'post',
            url: '/api/v{api-version}/parameters/{parameter.path.1}/{parameter-path-2}/{PARAMETER-PATH-3}',
            queryRef,
            pathRef,
            headersRef,
            bodyRef,
            cookiesRef
        }),
        key: [
            'Parameters',
            'callWithWeirdParameterNames',
            queryRef,
            pathRef,
            headersRef,
            bodyRef,
            cookiesRef
        ],
        ...options
    });
    return {
        ...mutation,
        query: queryRef,
        path: pathRef,
        headers: headersRef,
        body: bodyRef,
        cookies: cookiesRef
    };
};

export const useGetCallWithOptionalParamQuery = async (params: {}, options?: UseQueryOptions<unknown, unknown, GetCallWithOptionalParamData>) => {
    const queryRef = toRef(params?.query);
    const bodyRef = toRef(params?.body);
    const query = useQuery({
        query: client({
            method: 'get',
            url: '/api/v{api-version}/parameters',
            queryRef,
            bodyRef
        }),
        key: [
            'Parameters',
            'getCallWithOptionalParam',
            queryRef,
            bodyRef
        ],
        ...options
    });
    return {
        ...query,
        query: queryRef,
        body: bodyRef
    };
};

export const usePostCallWithOptionalParamMutation = async (params: {}, options?: UseMutationOptions<PostCallWithOptionalParamResponse, PostCallWithOptionalParamData, unknown>) => {
    const queryRef = toRef(params?.query);
    const bodyRef = toRef(params?.body);
    const mutation = useMutation({
        mutation: client({
            method: 'post',
            url: '/api/v{api-version}/parameters',
            queryRef,
            bodyRef
        }),
        key: [
            'Parameters',
            'postCallWithOptionalParam',
            queryRef,
            bodyRef
        ],
        ...options
    });
    return {
        ...mutation,
        query: queryRef,
        body: bodyRef
    };
};