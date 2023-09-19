import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
  },
});
