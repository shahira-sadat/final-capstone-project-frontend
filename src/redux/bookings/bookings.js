/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBookings = createAsyncThunk(
  'bookings/getBookings',
  async (idUser) => {
    const response = await fetch(
      `https://cars-rental.onrender.com/api/v1/users/${idUser}/bookings`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      },
    );
    const bookings = await response.json();
    return bookings;
  },
);

// export const postBooking = createAsyncThunk(
//   'bookings/postBooking',
//   async (data) => {
//     await fetch(
//       `https://cars-rental.onrender.com/api/v1/users/${data.user.user_id}/bookings`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           accept: 'application/json',
//         },
//         body: JSON.stringify(data.booking),
//       },
//     ).then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Something went wrong');
//     });
//   },
// );

export const postBooking = createAsyncThunk('bookings/postBooking', async (data) => {
  const response = await fetch(`https://cars-rental.onrender.com/api/v1/users/${data.user.user_id}/bookings`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      // Authorization: token,
    },
    body: JSON.stringify(data.booking),
  });
  const reservations = await response.json();
  return reservations;
});

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    status: null,
  },
  reducers: {
    setStatus(state) {
      state.status = null;
    },
  },
  extraReducers: {
    [postBooking.fulfilled]: (state, action) => {
      state.bookings = [...state.bookings, action.payload];
      state.status = 'success';
    },
    [postBooking.pending]: (state) => {
      state.status = 'loading';
    },
    [postBooking.rejected]: (state) => {
      state.status = 'failed';
    },
    [getBookings.pending]: (state) => {
      state.status = 'loading';
    },
    [getBookings.fulfilled]: (state, action) => {
      const bookings = action.payload.map((booking) => {
        const {
          id: bookingId,
          date: bookingDate,
          date_return: bookingDateReturn,
          city: bookingCity,
          user_id: bookingUserId,
          car_id: bookingCarId,
        } = booking;
        return {
          bookingId,
          bookingDate,
          bookingDateReturn,
          bookingCity,
          bookingUserId,
          bookingCarId,
        };
      });
      state.bookings = bookings;
      state.status = 'success';
    },
    [getBookings.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { bookingsReducer, setStatus } = bookingsSlice.actions;

export default bookingsSlice.reducer;
