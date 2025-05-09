import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: "",
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
      state.data = action.payload
    },
    put_product_id: (state, action) =>
    {
      state.data = action.payload
    },
    delete_product: (state, action) =>
    {
      state.data = action.payload
    },
    clean_product_id: (state) =>
    {
      state.data = "",
        state.errors = ""
    },
    error_product_id: (state, action) =>
    {
      state.errors = action.payload
    }
  }
});
export const { get_product_Id, post_product, put_product_id, clean_product_id, delete_product, error_product_id } = productId_slice.actions;
export default productId_slice.reducer