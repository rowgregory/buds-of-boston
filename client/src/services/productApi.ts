import { api } from './api';

const BASE_URL = '/product';

export const productApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    createProduct: build.mutation({
      query: (product: any) => ({
        url: BASE_URL,
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Product', 'Dashboard'],
    }),
    updateProduct: build.mutation({
      query: (product: any) => ({
        url: BASE_URL,
        method: 'PATCH',
        body: product,
      }),
      invalidatesTags: ['Product', 'Dashboard'],
    }),
    getProducts: build.query({
      query: () => BASE_URL,
      providesTags: ['Product'],
    }),
    getProduct: build.query({
      query: (productId: string) => `${BASE_URL}/${productId}`,
      providesTags: (_result: any, _error: any, arg: any) => [{ type: 'Product', id: arg }],
    }),
    deleteProduct: build.mutation({
      query: (product: any) => ({
        url: `${BASE_URL}/${product.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product', 'Dashboard'],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useDeleteProductMutation,
} = productApi;
