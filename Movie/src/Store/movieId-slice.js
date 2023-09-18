import { createSlice } from '@reduxjs/toolkit';

const initialMovieIDState = {
  id: '',
};
const movieIdSlice = createSlice({
  name: 'movieId',
  initialState: initialMovieIDState,
  changed: false,
  reducers: {
    openModal(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload;
    },
    closeModal(state) {
      // eslint-disable-next-line no-param-reassign
      state.id = '';
    },
  },
});

export const movieIdActions = movieIdSlice.actions;
export const movieIdReducer = movieIdSlice.reducer;
