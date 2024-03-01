import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FilterState {
	category: string;
}

const initialState: FilterState = {
	category: 'All',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		categoryChange: (state, { payload }: PayloadAction<string>) => {
			state.category = payload;
		},
	},
});

export const { categoryChange } = filterSlice.actions;
export default filterSlice.reducer;
