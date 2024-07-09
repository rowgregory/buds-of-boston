import { api } from './api';

const BASE_URL = '/auth';

export const authApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    register: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/register`,
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/login`,
        method: 'POST',
        body,
      }),
    }),
    verifyRegisterCode: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/verify-register-code`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyRegisterCodeMutation } = authApi;
