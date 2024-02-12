import { IProduct } from '@/types/product';
import { ICategory } from '@/types/categories';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], string>({
			query: () => '/products',
		}),
		getCategories: builder.query<ICategory[], string>({
			query: () => '/categories',
		}),
		getProductsByCategory: builder.query<IProduct[], string>({
			query: (category) => `/${category}`,
		}),
	}),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery, useGetCategoriesQuery } =
	productsApi;
