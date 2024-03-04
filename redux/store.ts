import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi';
import filterSlice from './filter/filter.slice';
import cartSlice from './cart/cart.slice';
import favouriteSlice from './favourite/favourite.slice';
import { cartApi } from './cartApi';
import { favouriteApi } from './favouriteApi';

export const store = configureStore({
	reducer: {
		favouriteSlice,
		filterSlice,
		cartSlice,
		[productsApi.reducerPath]: productsApi.reducer,
		[cartApi.reducerPath]: cartApi.reducer,
		[favouriteApi.reducerPath]: favouriteApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			productsApi.middleware,
			cartApi.middleware,
			favouriteApi.middleware,
		]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
