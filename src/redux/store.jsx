import { configureStore } from '@reduxjs/toolkit';
import carsRedux from './cars/cars';
import teamsRedux from './team/teams';

const store = configureStore({
  reducer: {
    cars: carsRedux,
    teams: teamsRedux,
  },
});

export default store;
