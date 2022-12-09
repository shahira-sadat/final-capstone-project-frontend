/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const carsPath = 'https://cars-rental.onrender.com/api/v1/cars';

export const getCars = createAsyncThunk('cars/getCars', async () => {
  const response = await fetch(carsPath, {
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

export const deleteCar = createAsyncThunk('cars/deleteCar', async (id) => {
  try {
    const response = await fetch(`${carsPath}/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });
    return response.ok ? id : null;
  } catch (e) {
    return e.errors;
  }
});

export const postCar = createAsyncThunk('cars/postCar', async (carData) => {
  await fetch(carsPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(carData),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  });
});
export const updateCar = createAsyncThunk('cars/updateCar', async (carData) => {
  await fetch(`${carsPath}/${carData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(carData),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  });
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    status: null,
    postStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteCar.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: state.cars.filter((car) => car.id !== action.payload),
    }));
    builder.addCase(deleteCar.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(deleteCar.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(postCar.fulfilled, (state, action) => ({
      ...state,
      postStatus: 'success',
      cars: [...state.cars, action.payload],
    }));
    builder.addCase(postCar.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(postCar.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(getCars.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: action.payload,
    }));
    builder.addCase(getCars.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getCars.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    // [getCars.pending]: (state) => {
    //   state.status = 'loading';
    // },
    // [getCars.fulfilled]: (state, action) => {
    //   const cars = action.payload.map((car) => {
    //     const {
    //       id: carId,
    //       car_name: carName,
    //       image: carImage,
    //       brand: carBrand,
    //       color: carColor,
    //       year: carYear,
    //       price: carPrice,
    //       booked: carBooked,
    //     } = car;
    //     return {
    //       carId,
    //       carName,
    //       carImage,
    //       carBrand,
    //       carColor,
    //       carYear,
    //       carPrice,
    //       carBooked,
    //     };
    //   });
    //   state.cars = cars;
    //   state.status = 'success';
    // },
    // [getCars.rejected]: (state) => {
    //   state.status = 'failed';
    // },
  },
});

export const { carsReducer } = carsSlice.actions;

export default carsSlice.reducer;
