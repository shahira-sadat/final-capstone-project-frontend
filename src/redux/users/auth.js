import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
  },
  reducers: {},
});

export const { usersReducer } = authSlice.actions;
