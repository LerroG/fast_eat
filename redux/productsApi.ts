import { IProduct } from '@/components/types/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], unknown>({
			query: () => '/products',
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
