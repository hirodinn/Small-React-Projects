import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // 'cart' is the name used in useSelector(state.cart)
  },
});
