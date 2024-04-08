import { IFilter } from '@/types/filter';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IFilter = {
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
