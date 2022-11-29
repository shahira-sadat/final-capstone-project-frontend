import { configureStore } from '@reduxjs/toolkit';
import carsRedux from './cars/cars';

const store = configureStore({
  reducer: {
    cars: carsRedux,
  },
});

export default store;
