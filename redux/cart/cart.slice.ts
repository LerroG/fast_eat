import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { cartApi } from '../cartApi';
import { ICart } from '@/types/cart';
import { calcTotalPrice } from '@/lib/utils';

interface CartState {
	cart: ICart[];
	isLoading: boolean;
	totalCartCost: number;
}

const initialState: CartState = {
	cart: [],
	isLoading: false,
	totalCartCost: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(cartApi.endpoints.getCart.matchPending, (state) => {
				state.isLoading = true;
			})
			.addMatcher(
				cartApi.endpoints.getCart.matchFulfilled,
				(state, { payload }: PayloadAction<ICart[]>) => {
					state.isLoading = false;
					state.cart = payload;
					state.totalCartCost = calcTotalPrice(payload);
				}
			);
	},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
