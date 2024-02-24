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
		}),
		updateCartItem: builder.mutation<ICart, ICart>({
			query: (cartItem) => ({
				url: '/cart',
				method: 'PUT',
				body: cartItem,
			}),
			invalidatesTags: ['Cart'],
		}),
	}),
});

export const { useGetCartQuery } = cartApi;
