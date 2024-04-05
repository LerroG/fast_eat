import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi';
import filterSlice from './filter/filter.slice';
import cartSlice from './cart/cart.slice';
import favoriteSlice from './favorite/favorite.slice';
import { cartApi } from './cartApi';
import { favoriteApi } from './favoriteApi';

export const store = configureStore({
	reducer: {
		favoriteSlice,
		filterSlice,
		cartSlice,
		[productsApi.reducerPath]: productsApi.reducer,
		[cartApi.reducerPath]: cartApi.reducer,
		[favoriteApi.reducerPath]: favoriteApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			productsApi.middleware,
			cartApi.middleware,
			favoriteApi.middleware,
		]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
