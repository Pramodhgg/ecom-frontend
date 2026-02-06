import { configureStore } from "@reduxjs/toolkit";
import { productReducers } from "./ProductReducers";
import { ErrorReducer } from "./ErrorReducer";
import { cartReducer } from "./cartReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const preloadedState = {
  carts: {
    cart: cartItems,
  },
};
console.log(preloadedState);

const store = configureStore({
  reducer: {
    products: productReducers,
    error: ErrorReducer,
    carts: cartReducer,
  },
  preloadedState,
});

export default store;
