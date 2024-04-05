import { ICart } from '@/types/cart';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
	reducerPath: 'cartApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
	tagTypes: ['Cart'],
	endpoints: (builder) => ({
		getCart: builder.query<ICart[], null>({
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
		deleteCartItem: builder.mutation<ICart, ICart>({
			query: (cartItem) => ({
				url: '/cart',
				method: 'DELETE',
				body: cartItem,
			}),
			invalidatesTags: ['Cart'],
		}),
		addCartItem: builder.mutation<ICart, ICart>({
			query: (cartItem) => ({
				url: '/cart',
				method: 'PUT',
				body: cartItem,
			}),
			invalidatesTags: ['Cart'],
		}),
	}),
});

export const {
	useGetCartQuery,
	useUpdateCartItemMutation,
	useDeleteCartItemMutation,
	useAddCartItemMutation,
} = cartApi;
