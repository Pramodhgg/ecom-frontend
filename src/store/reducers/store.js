import { configureStore } from "@reduxjs/toolkit";
import { productReducers } from "./ProductReducers";
import { ErrorReducer } from "./ErrorReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";

const user = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const preloadedState = {
  auth: { user },
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
    auth: authReducer,
  },
  preloadedState,
});

export default store;
