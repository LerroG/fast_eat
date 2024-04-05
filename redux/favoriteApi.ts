import { IFavorite } from '@/types/favorite';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favoriteApi = createApi({
	reducerPath: 'favoriteApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
	tagTypes: ['Favorite'],
	endpoints: (builder) => ({
		getFavorite: builder.query<IFavorite[], null>({
			query: () => ({
				url: '/favorite',
			}),
			providesTags: ['Favorite'],
		}),
		deleteFavoriteItem: builder.mutation<IFavorite, IFavorite>({
			query: (favoriteItem) => ({
				url: '/favorite',
				method: 'DELETE',
				body: favoriteItem,
			}),
			invalidatesTags: ['Favorite'],
		}),
		addFavoriteItem: builder.mutation<IFavorite, IFavorite>({
			query: (favoriteItem) => ({
				url: '/favorite',
				method: 'PUT',
				body: favoriteItem,
			}),
			invalidatesTags: ['Favorite'],
		}),
	}),
});

export const {
	useGetFavoriteQuery,
	useDeleteFavoriteItemMutation,
	useAddFavoriteItemMutation,
} = favoriteApi;
