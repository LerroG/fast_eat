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
		categoryChange: (state, action) => {
			state.category = action.payload
		},
	},
});

export const { categoryChange } = filterSlice.actions;
export default filterSlice.reducer;
