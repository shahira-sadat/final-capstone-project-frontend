import { configureStore } from '@reduxjs/toolkit';
import carsRedux from './cars/cars';
import teamsRedux from './team/teams';
import usersRedux from './users/users';
import bookingsRedux from './bookings/bookings';

const store = configureStore({
  reducer: {
    cars: carsRedux,
    teams: teamsRedux,
    users: usersRedux,
    bookings: bookingsRedux,
  },
});

export default store;
