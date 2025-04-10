import { configureStore } from "@reduxjs/toolkit";
import logInReducer from "../slice/logIn_slice";
import productReducers from "../slice/products_slice";


export const store = configureStore({
  reducer: {
    logIn: logInReducer,
    products: productReducers
  }
})