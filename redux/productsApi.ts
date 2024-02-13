import { IProduct } from '@/types/product';
import { ICategory } from '@/types/categories';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
	tagTypes: ['Products'],
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], string>({
			query: (category) => ({
				url: '/products',
				params: { _category: category },
			}),
		}),
		getCategories: builder.query<ICategory[], string>({
			query: () => '/categories',
		}),
	}),
});

export const {
	useLazyGetProductsQuery,
	useGetProductsQuery,
	useGetCategoriesQuery,
} = productsApi;
