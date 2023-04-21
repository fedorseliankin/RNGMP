import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TProductResponse} from './types';

export const productsSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({baseUrl: 'https://demo.spreecommerce.org/api/'}),
  endpoints: builder => ({
    getProducts: builder.query<TProductResponse, {name?: string, id?: string }>({
      query: ({name, id}) => ({
        url: 'v2/storefront/products',
        method: 'GET',
        params: {
          'filter[name]': name,
          'filter[ids]': id,
        }
      }),
    }),
  }),
});

export const {useGetProductsQuery} = productsSlice;
