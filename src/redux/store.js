import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";
import catalogReducer from "./catalogSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    catalog: catalogReducer,
  },
});
