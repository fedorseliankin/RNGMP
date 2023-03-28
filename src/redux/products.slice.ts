import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TProductResponse} from './types';

export const productsSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({baseUrl: ''}),
  endpoints: builder => ({
    getProducts: builder.query<TProductResponse, void>({
      query: () => ({
        url: 'https://demo.spreecommerce.org/api/v2/storefront/products',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetProductsQuery} = productsSlice;
