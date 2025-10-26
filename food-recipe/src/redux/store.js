import { configureStore } from "@reduxjs/toolkit";
import favoritesReduce from "./favoritesReduce";

export const store = configureStore({
  reducer: {
    favorites: favoritesReduce,
  },
});
