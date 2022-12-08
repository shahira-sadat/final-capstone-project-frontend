/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const usersPath = 'https://cars-rental.onrender.com';

export const getUsers = createAsyncThunk('/login', async () => {
  const response = await fetch(usersPath, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      // Authorization: token,
    },
  });
  const cars = await response.json();
  return cars;
});

export const postUser = createAsyncThunk('/login', async (state) => {
  const response = await fetch(usersPath, {
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

// export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
//   await fetch(`${usersPath}/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'content-type': 'application/json',
//       accept: 'application/json',
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Something went wrong');
//     });
// });

// export const postUser = createAsyncThunk('users/postUser', async (UserData) => {
//   await fetch(usersPath, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       accept: 'application/json',
//     },
//     body: JSON.stringify(UserData),
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Something went wrong');
//     });
// });

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    auth: false,
    role: null,
    status: null,
  },
  reducers: {
    setAuth(state, action) {
      state.auth = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;
    },
  },
  extraReducers: {
    // [deleteUser.fulfilled]: (state, action) => {
    //   const newState = state.users.filter((User) => User.id !== action.payload);
    //   state.users = newState;
    //   state.status = 'success';
    // },
    // [deleteUser.pending]: (state) => {
    //   state.status = 'loading';
    // },
    // [deleteUser.rejected]: (state) => {
    //   state.status = 'failed';
    // },
    [postUser.fulfilled]: (state, action) => {
      state.users = [...state.users, action.payload];
      state.status = 'success';
    },
    [postUser.pending]: (state) => {
      state.status = 'loading';
    },
    [postUser.rejected]: (state) => {
      state.status = 'failed';
    },

    [getUsers.pending]: (state) => {
      state.status = 'loading';
    },
    [getUsers.fulfilled]: (state, action) => {
      const users = action.payload.map((user) => {
        const {
          id: userId,
          user_name: userUserName,
          name: userName,
          photo: userPhoto,
          date_of_birth: userBirth,
          role: userRole,
          email: userEmail,
        } = user;
        return {
          userName,
          userId,
          userUserName,
          userPhoto,
          userBirth,
          userRole,
          userEmail,
        };
      });
      state.users = users;
      state.status = 'success';
    },
    [getUsers.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { setAuth, setRole } = usersSlice.actions;

export default usersSlice.reducer;
