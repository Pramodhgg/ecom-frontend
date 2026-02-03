import { configureStore } from "@reduxjs/toolkit";
import { productReducers } from "./ProductReducers";
import { ErrorReducer } from "./ErrorReducer";

const store = configureStore({
  reducer: {
    products: productReducers,
    error: ErrorReducer,
  },
  preloadedState: {},
});

export default store;
