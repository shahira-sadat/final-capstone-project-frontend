/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const carsPath = 'https://cars-rental.onrender.com/api/v1/cars';

export const getCars = createAsyncThunk('cars/getCars', async () => {
  const response = await fetch(carsPath);
  const res = await response.json();
  return res;
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    status: null,
  },
  // reducers: {
  //   carsReducer: (state, action) => {
  //     const newState = state.cars.map((car) => {
  //       const { reserved } = car;
  //       if (car.carId !== action.payload) {
  //         return car;
  //       }
  //       return { ...car, reserved: !reserved };
  //     });
  //     return { ...state, cars: newState };
  //   },
  // },
  extraReducers: {
    [getCars.pending]: (state) => {
      state.status = 'loading';
    },
    [getCars.fulfilled]: (state, action) => {
      const cars = action.payload.map((car) => {
        const {
          id: carId,
          car_name: carName,
          image: carImage,
          brand: carBrand,
          color: carColor,
          year: carYear,
          price: carPrice,
          booked: carBooked,

        } = car;
        return {
          carId,
          carName,
          carImage,
          carBrand,
          carColor,
          carYear,
          carPrice,
          carBooked,
        };
      });
      state.cars = cars;
      state.status = 'success';
    },
    [getCars.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { carsReducer } = carsSlice.actions;

export default carsSlice.reducer;
