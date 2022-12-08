/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const basePath = 'https://cars-rental.onrender.com';

export const signUpUser = createAsyncThunk('/signup', async (state) => {
  const response = await fetch(`${basePath}/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      // Authorization: token,
    },
    body: JSON.stringify(state),

  });
  const user = await response.json();
  return user;
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
  const user = await response.json();
  return user;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    auth: false,
    role: null,
    id: null,
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
        state.role = null;
        state.auth = null;
      }
    },
    [logInUser.pending]: (state) => {
      state.status = 'loading';
    },
    [logInUser.rejected]: (state) => {
      state.status = 'failed';
    },
    [signUpUser.fulfilled]: (state) => {
      state.status = 'success';
    },
    [signUpUser.pending]: (state) => {
      state.status = 'loading';
    },
    [signUpUser.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { setAuth, setRole, setId } = usersSlice.actions;

export default usersSlice.reducer;
