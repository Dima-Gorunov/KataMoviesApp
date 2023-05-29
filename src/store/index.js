import { combineReducers, configureStore } from '@reduxjs/toolkit';

import MovieSlice from './Slice/MovieSlice';

const RootReducer = combineReducers({
  MovieStore: MovieSlice,
});

export const store = configureStore({
  reducer: RootReducer,
});
