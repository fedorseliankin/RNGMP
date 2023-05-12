import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TCreateAccauntParams, TProductParams, TProductResponse, TUserResponse} from './types';

export const productsSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({baseUrl: 'https://demo.spreecommerce.org/api/'}),
  endpoints: builder => ({
    getProducts: builder.query<TProductResponse, TProductParams>({
      query: ({name, id}) => ({
        url: 'v2/storefront/products',
        method: 'GET',
        params: {
          'filter[name]': name,
          'filter[ids]': id,
        }
      }),
    }),
    createAccaount: builder.mutation<TUserResponse, TCreateAccauntParams>({
      query: (params) => ({
        url: 'v2/storefront/account',
        method: 'POST',
        body: {
          user: params,
        }
      })
    })
  }),
});

export const {useGetProductsQuery, useCreateAccaountMutation} = productsSlice;
