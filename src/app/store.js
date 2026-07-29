import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "../features/favorites/favoritesSlice";
import filterReducer from "../features/filters/filterSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filters: filterReducer,
    theme: themeReducer,
  },
});
