import { configureStore } from "@reduxjs/toolkit";
import  logIn_slice  from "../slice/logIn_slice";
import  al_plato_slice  from "../slice/al_plato_slice";

export const store = configureStore({
  reducer:{
   logIn:logIn_slice,
   alPlato:al_plato_slice
/*     bebidas_slice,
    bebidasAlcohol_slice,
    cafeteria_slice,
    ensaladasGuarniciones_slice,
    entrePanes_slice,
    pasteleria_slice,
    pizzaTartasEmpanadas_slice,
    postres_slice,
    tapeo_slice */

  }
})