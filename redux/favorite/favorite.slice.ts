import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { favoriteApi } from '../favoriteApi';
import { IFavorite } from '@/types/favorite';

interface FavoriteState {
	isLoading: boolean;
	favorite: IFavorite[];
}

const initialState: FavoriteState = {
	isLoading: false,
	favorite: [],
};

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(favoriteApi.endpoints.getFavorite.matchPending, (state) => {
				state.isLoading = true;
			})
			.addMatcher(
				favoriteApi.endpoints.getFavorite.matchFulfilled,
				(state, { payload }: PayloadAction<IFavorite[]>) => {
					state.isLoading = false;
					state.favorite = payload;
				}
			);
	},
});

export const {} = favoriteSlice.actions;
export default favoriteSlice.reducer;
