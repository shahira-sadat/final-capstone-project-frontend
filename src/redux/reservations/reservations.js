/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const carsPath = 'https://cars-rental.onrender.com/api/v1/cars';

export const getCars = createAsyncThunk('cars/getCars', async () => {
  const response = await fetch(carsPath);
  const res = await response.json();
  return res;
});

export const deleteCar = createAsyncThunk('cars/deleteCar', async (id) => {
  await fetch(`${carsPath}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.log(error);
    });
});

export const postCar = createAsyncThunk('cars/postCar', async (carData) => {
  await fetch(carsPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(carData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.log(error);
    });
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [deleteCar.fulfilled]: (state, action) => {
      const newState = state.cars.filter((car) => car.id !== action.payload);
      state.cars = newState;
      state.status = 'success';
    },
    [deleteCar.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteCar.rejected]: (state) => {
      state.status = 'failed';
    },
    [postCar.fulfilled]: (state, action) => {
      state.cars = [...state.cars, action.payload];
      state.status = 'success';
    },
    [postCar.pending]: (state) => {
      state.status = 'loading';
    },
    [postCar.rejected]: (state) => {
      state.status = 'failed';
    },
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
