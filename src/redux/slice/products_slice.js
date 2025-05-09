import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alPlato: "",
  bebidas: "",
  bebidasAlcohol: "",
  cafeteria: "",
  ensaladasGuarniciones: "",
  entrePanes: "",
  pasteleria: "",
  pizzaTartasEmpanadas: "",
  postres: "",
  tapeo: "",
  errors: ""
};

export const products_slice = createSlice({
  name: 'products_slice',
  initialState,
  reducers: {
    get_products: (state, action) =>
    {
      /* recibe por action el nomre de la coleccion y carga los datos segun corresponda */
      state[action.payload.collection] = action.payload.data

    },
    error_products: (state, action) =>
    {
      state.data = action.payload.data,
        state.status = action.payload.status
    }
  }
});
export const { get_products, error_products } = products_slice.actions;
export default products_slice.reducer