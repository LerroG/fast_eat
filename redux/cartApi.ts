import { ICart } from '@/types/cart';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
	reducerPath: 'cartApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
	tagTypes: ['Cart'],
	endpoints: (builder) => ({
		getCart: builder.query<ICart[], string>({
			query: () => ({
				url: '/cart',
			}),
			providesTags: ['Cart'],
		}),
		updateCartItem: builder.mutation<ICart, { id: string; totalCount: number }>(
			{
				query: (cartItem) => ({
					url: '/cart',
					method: 'PATCH',
					body: cartItem,
				}),
				invalidatesTags: ['Cart'],
			}
		),
		deleteCartItem: builder.mutation<ICart, ICart>(
			{
				query: (cartItem) => ({
					url: '/cart',
					method: 'DELETE',
					body: cartItem,
				}),
				invalidatesTags: ['Cart'],
			}
		),
	}),
});

export const { useGetCartQuery, useUpdateCartItemMutation, useDeleteCartItemMutation } = cartApi;
