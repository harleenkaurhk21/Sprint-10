import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    addFavorite: (state, action) => {
      const exists = state.movies.find(
        (movie) => movie.id === action.payload.id
      );

      if (!exists) {
        state.movies.push(action.payload);
      }
    },

    removeFavorite: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },

    clearFavorites: (state) => {
      state.movies = [];
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  clearFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
