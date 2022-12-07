/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBookings = createAsyncThunk(
  'bookings/getBookings',
  async (id) => {
    await fetch(
      `https://cars-rental.onrender.com/api/v1/users/${id}/bookings`,
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    });
  },
);

export const deleteBooking = createAsyncThunk(
  'bookings/deleteBooking',
  async (id) => {
    await fetch(
      `https://cars-rental.onrender.com/api/v1/users/${id}/bookings`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      },
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    });
  },
);

export const postBooking = createAsyncThunk(
  'bookings/postBooking',
  async (bookingData, id) => {
    await fetch(
      `https://cars-rental.onrender.com/api/v1/users/${id}/bookings`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(BookingData),
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
    [deleteBooking.fulfilled]: (state, action) => {
      const newState = state.bookings.filter(
        (Booking) => Booking.id !== action.payload,
      );
      state.bookings = newState;
      state.status = 'success';
    },
    [deleteBooking.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteBooking.rejected]: (state) => {
      state.status = 'failed';
    },
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
    [getbookings.pending]: (state) => {
      state.status = 'loading';
    },
    [getbookings.fulfilled]: (state, action) => {
      const bookings = action.payload.map((Booking) => {
        const {
          id: BookingId,
          Booking_name: BookingName,
          image: BookingImage,
          brand: BookingBrand,
          color: BookingColor,
          year: BookingYear,
          price: BookingPrice,
          booked: BookingBooked,
        } = Booking;
        return {
          BookingId,
          BookingName,
          BookingImage,
          BookingBrand,
          BookingColor,
          BookingYear,
          BookingPrice,
          BookingBooked,
        };
      });
      state.bookings = bookings;
      state.status = 'success';
    },
    [getbookings.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { bookingsReducer } = bookingsSlice.actions;

export default bookingsSlice.reducer;
