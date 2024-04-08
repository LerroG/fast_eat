import { IProduct } from '@/types/product';
import { ICategory } from '@/types/categories';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilter } from '@/types/filter';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
	tagTypes: ['Products'],
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], IFilter>({
			query: (category) => ({
				url: '/products',
				params: { category: category.category, search: category.search },
			}),
		}),
		getCategories: builder.query<ICategory[], string>({
			query: () => '/categories',
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetCategoriesQuery,
} = productsApi;
