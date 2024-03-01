import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../cartApi";

interface CartState {
	totalCartCost: number;
}

const initialState: CartState = {
	totalCartCost: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			cartApi.endpoints.getCart.matchFulfilled,
			(state, { payload }) => {
				state.totalCartCost = payload.reduce(
					(acc, item) => +item.price * item.totalCount + acc,
					initialState.totalCartCost
				);
			}
		);
	},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;