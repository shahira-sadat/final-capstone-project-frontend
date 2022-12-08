import { configureStore } from '@reduxjs/toolkit';
import carsRedux from './cars/cars';
import teamsRedux from './team/teams';
import usersRedux from './users/users';

const store = configureStore({
  reducer: {
    cars: carsRedux,
    teams: teamsRedux,
    users: usersRedux,
  },
});

export default store;
