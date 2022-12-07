import { configureStore, combineReducers } from '@reduxjs/toolkit';
import carsRedux from './cars/cars';
import teamsRedux from './team/teams';
import usersRedux from './users/users';

const rootReducer = combineReducers({
  cars: carsRedux,
  teams: teamsRedux,
  users: usersRedux,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
