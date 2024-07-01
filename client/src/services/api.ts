import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: `http://ec2-18-191-243-44.us-east-2.compute.amazonaws.com/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth?.token;
    if (token) {
      (headers as Headers).set('Authorization', `Bearer ${token}`);
      (headers as Headers).set('Content-Type', 'application/json');
    }
    return headers;
  },
});

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Auth', 'Code', 'Product', 'Dashboard'],
  endpoints: () => ({}),
}) as any;
