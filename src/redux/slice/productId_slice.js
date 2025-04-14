import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data:"",
  errors:""
};

export const productId_slice = createSlice({
  name:'productId_slice',
  initialState,
  reducers:{
    get_product_Id:(state,action)=>{
      state.data = action.payload
      console.log(action.payload)
    },
    post_product:(state,action)=>{
      state.data = action.payload.data
    },
    put_product_id:(state,action)=>{
      state.data = action.payload.data
      console.log(action.payload)
    },
    clean_product_id:(state)=>{
      state.data = ""
    },
    error_product_id:(state,action)=>{
      state.data = action.payload.data,
      state.status = action.payload.status
    }
  }
});
export const { get_product_Id, post_product, put_product_id, clean_product_id, error_product_id }= productId_slice.actions;
export default productId_slice.reducer