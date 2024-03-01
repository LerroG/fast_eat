import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi';
import filterSlice from './filter/filter.slice';
import cartSlice from './cart/cart.slice';
import { cartApi } from './cartApi';

export const store = configureStore({
	reducer: {
		filterSlice,
		cartSlice,
		[productsApi.reducerPath]: productsApi.reducer,
		[cartApi.reducerPath]: cartApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([productsApi.middleware, cartApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
