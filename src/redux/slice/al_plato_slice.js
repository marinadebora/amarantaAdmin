import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data:"",
  status:"",
  errors:""
};

export const al_plato_slice = createSlice({
  name:'al_plato_slice',
  initialState,
  reducers:{
    get_alPlato:(state,action)=>{
      state.data = action.payload.data
    },
    post_alPlato:(state,action)=>{
      state.data = action.payload.data,
      state.status = action.payload.status
    },
    put_alPlato:(state,action)=>{
      state.data = action.payload.data,
      state.status = action.payload.status
    },
    error_alPlato:(state,action)=>{
      state.data = action.payload.data,
      state.status = action.payload.status
    }
  }
});
export const { get_alPlato, post_alPlato, put_alPlato, error_alPlato }= al_plato_slice.actions;
export default al_plato_slice.reducer