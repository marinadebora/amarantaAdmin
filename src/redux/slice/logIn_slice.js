import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: "",
  errors: ""
};

export const logIn_slice = createSlice({
  name: 'logIn_slice_slice',
  initialState,
  reducers: {
    logIn_user: (state, action) =>
    {
      state.data = action.payload,
        sessionStorage.setItem('token', action.payload)
    },
    clean_logIn: (state) =>
    {
      state.data = "",
      state.errors = ""
    },
    error_logIn: (state, action) =>
    {
      state.errors = action.payload
    }
  }
});

export const { logIn_user, clean_logIn, error_logIn } = logIn_slice.actions;
export default logIn_slice.reducer