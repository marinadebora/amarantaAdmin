import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: "",
  msj: "",
  errors: ""
};

export const productId_slice = createSlice({
  name: 'productId_slice',
  initialState,
  reducers: {
    get_product_Id: (state, action) =>
    {
      state.data = action.payload
    },
    post_product: (state, action) =>
    {
      state.data = action.payload.data,
      state.msj = action.payload.msj
    },
    put_product_id: (state, action) =>
    {
      state.msj = action.payload.msj
    },
    delete_product: (state, action) =>
    {
      state.msj = action.payload.msj
    },
    clean_product_id: (state) =>
    {
      state.data = "",
      state.errors = ""
      state.msj = ""
    },
    error_product_id: (state, action) =>
    {
      state.errors = action.payload
    }
  }

});
export const { get_product_Id, post_product, put_product_id, clean_product_id, delete_product, error_product_id } = productId_slice.actions;
export default productId_slice.reducer