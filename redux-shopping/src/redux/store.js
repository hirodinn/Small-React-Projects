// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // This is the slice name used in useSelector
  },
});
