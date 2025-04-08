import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data:"",
  status:"",
  errors:""
};

export const products_slice = createSlice({
  name:'products_slice',
  initialState,
  reducers:{
    get_products:(state,action)=>{
      state.data = action.payload.data
    },
    post_products:(state,action)=>{
      state.data = action.payload.data,
      state.status = action.payload.status
    },
    put_products:(state,action)=>{
      state.data = action.payload.data,
      state.status = action.payload.status
    },
    error_products:(state,action)=>{
      state.data = action.payload.data,
      state.status = action.payload.status
    }
  }
});
export const { get_products, post_products, put_products, error_products }= products_slice.actions;
export default products_slice.reducer