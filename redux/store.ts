import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi';
import filterSlice from './filter/filter.slice';

export const store = configureStore({
	reducer: {
		filterSlice,
		[productsApi.reducerPath]: productsApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
