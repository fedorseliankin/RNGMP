import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TProductResponse} from './types';

export const productsSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({baseUrl: 'https://demo.spreecommerce.org/api/'}),
  endpoints: builder => ({
    getProducts: builder.query<TProductResponse, string | void>({
      query: (input) => ({
        url: 'v2/storefront/products',
        method: 'GET',
        params: {'filter[name]': input}
      }),
    }),
  }),
});

export const {useGetProductsQuery} = productsSlice;
