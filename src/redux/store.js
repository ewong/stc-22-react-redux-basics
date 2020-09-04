import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";
import restoReducer from "./restoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    resto: restoReducer,
  },
});
