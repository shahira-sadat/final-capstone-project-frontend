/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const basePath = 'https://cars-rental.onrender.com';

export const signUpUser = createAsyncThunk('/login', async (state) => {
  const response = await fetch(`${basePath}/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      // Authorization: token,
    },
    body: JSON.stringify(state),
  });
  const cars = await response.json();
  return cars;
});

export const logInUser = createAsyncThunk('/login', async (state) => {
  const response = await fetch(`${basePath}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      // Authorization: token,
    },
    body: JSON.stringify(state),
  });
  const cars = await response.json();
  return cars;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    auth: false,
    role: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [logInUser.fulfilled]: (state, action) => {
      if (action.payload.status === 200) {
        state.users = action.payload;
        state.auth = true;
        state.role = action.payload.user.role;
        state.status = 'success';
      } else {
        state.status = 'error';
      }
    },
    [logInUser.pending]: (state) => {
      state.status = 'loading';
    },
    [logInUser.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { setAuth, setRole } = usersSlice.actions;

export default usersSlice.reducer;
