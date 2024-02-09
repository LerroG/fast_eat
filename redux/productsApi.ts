import { IProduct } from '@/components/types/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], string>({
			query: () => '/products',
		}),
		getProductsByCategory: builder.query<IProduct[], string>({
			query: (category) => `/${category}`,
		}),
	}),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery } = productsApi;
