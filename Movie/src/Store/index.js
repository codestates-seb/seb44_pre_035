import { configureStore } from '@reduxjs/toolkit';
import { movieIdReducer } from './movieId-slice';

const store = configureStore({
  reducer: { ID: movieIdReducer },
});

export default store;
