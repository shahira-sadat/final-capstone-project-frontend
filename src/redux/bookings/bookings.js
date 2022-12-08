/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBookings = createAsyncThunk('cars/getBookings', async (id) => {
  const response = await fetch(`https://cars-rental.onrender.com/api/v1/users/${id}/bookings`, {
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

// export const deleteBooking = createAsyncThunk(
//   'bookings/deleteBooking',
//   async (id) => {
//     await fetch(
//       `https://cars-rental.onrender.com/api/v1/users/${id}/bookings`,
//       {
//         method: 'DELETE',
//         headers: {
//           'content-type': 'application/json',
//           accept: 'application/json',
//         },
//       },
//     ).then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Something went wrong');
//     });
//   },
// );

export const postBooking = createAsyncThunk(
  'bookings/postBooking',
  async (bookingData) => {
    await fetch(
      `https://cars-rental.onrender.com/api/v1/users/${bookingData.user_id}/bookings`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(bookingData),
      },
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    });
  },
);

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    // [deleteBooking.fulfilled]: (state, action) => {
    //   const newState = state.bookings.filter(
    //     (Booking) => Booking.id !== action.payload,
    //   );
    //   state.bookings = newState;
    //   state.status = 'success';
    // },
    // [deleteBooking.pending]: (state) => {
    //   state.status = 'loading';
    // },
    // [deleteBooking.rejected]: (state) => {
    //   state.status = 'failed';
    // },
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

export const { bookingsReducer } = bookingsSlice.actions;

export default bookingsSlice.reducer;
