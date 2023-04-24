import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {productsSlice} from './products.slice';
// import authReducer from './auth';

const ProductStore = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
    // auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      productsSlice.middleware,
    ),
});

setupListeners(ProductStore.dispatch);
export type RootState = ReturnType<typeof ProductStore.getState>;
export default ProductStore;
