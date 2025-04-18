// This file is auto-generated by @hey-api/openapi-ts

import { useMutation, type UseMutationOptions } from '@pinia/colada';
import { toRef } from 'vue';
import type { PostApiVbyApiVersionFormDataData } from '../../types.gen';
import { client } from '@pinia/colada/client';

export const usePostApiVbyApiVersionFormDataMutation = async (params: {}, options?: UseMutationOptions<unknown, PostApiVbyApiVersionFormDataData, unknown>) => {
    const queryRef = toRef(params?.query);
    const bodyRef = toRef(params?.body);
    const mutation = useMutation({
        mutation: client({
            method: 'post',
            url: '/api/v{api-version}/formData',
            queryRef,
            bodyRef
        }),
        key: [
            'FormData',
            'postApiVbyApiVersionFormData',
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