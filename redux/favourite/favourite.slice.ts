import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { favouriteApi } from '../favouriteApi';
import { IFavourite } from '@/types/favourite';

interface FavouriteState {
	favourite: IFavourite[];
}

const initialState: FavouriteState = {
	favourite: [],
};

export const favouriteSlice = createSlice({
	name: 'favourite',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			favouriteApi.endpoints.getFavourite.matchFulfilled,
			(state, { payload }: PayloadAction<IFavourite[]>) => {
				state.favourite = payload;
			}
		);
	},
});

export const {} = favouriteSlice.actions;
export default favouriteSlice.reducer;
