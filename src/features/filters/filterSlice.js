import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
  rating: 0,
  search: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setRating: (state, action) => {
      state.rating = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    resetFilters: (state) => {
      state.category = "All";
      state.rating = 0;
      state.search = "";
    },
  },
});

export const {
  setCategory,
  setRating,
  setSearch,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
