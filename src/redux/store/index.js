import { configureStore } from "@reduxjs/toolkit";
import {logIn_slice} from "../slice/logIn_slice";
import { products_slice } from "../slice/products_slice";


export const store = configureStore({
  reducer: {
    logIn: logIn_slice,
    products: products_slice
  }
})