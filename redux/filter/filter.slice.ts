import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FilterState {
	category: string;
	search: string;
}

const initialState: FilterState = {
	category: 'All',
	search: '',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		categoryChange: (state, { payload }: PayloadAction<string>) => {
			state.category = payload;
		},
		searchInput: (state, { payload }: PayloadAction<string>) => {
			state.search = payload;
		},
	},
});

export const { categoryChange, searchInput } = filterSlice.actions;
export default filterSlice.reducer;
