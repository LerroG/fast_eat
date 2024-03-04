import { IFavourite } from '@/types/favourite';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favouriteApi = createApi({
	reducerPath: 'favouriteApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
	tagTypes: ['Favourite'],
	endpoints: (builder) => ({
		getFavourite: builder.query<IFavourite[], null>({
			query: () => ({
				url: '/favourite',
			}),
			providesTags: ['Favourite'],
		}),
		deleteFavouriteItem: builder.mutation<IFavourite, IFavourite>({
			query: (favouriteItem) => ({
				url: '/favourite',
				method: 'DELETE',
				body: favouriteItem,
			}),
			invalidatesTags: ['Favourite'],
		}),
		addFavouriteItem: builder.mutation<IFavourite, IFavourite>({
			query: (favouriteItem) => ({
				url: '/favourite',
				method: 'PUT',
				body: favouriteItem,
			}),
			invalidatesTags: ['Favourite'],
		}),
	}),
});

export const {
	useGetFavouriteQuery,
	useDeleteFavouriteItemMutation,
	useAddFavouriteItemMutation,
} = favouriteApi;
