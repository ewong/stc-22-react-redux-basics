import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items[action.payload.productId];
      if (item === undefined) {
        state.items[action.payload.productId] = {
          productId: action.payload.productId,
          qty: 0,
        };
        console.log(state);
      } else {
        item.qty++;
      }
    },
    removeItem: (state, action) => {
      const item = state.items[action.payload.productId];
      if (item === null) return;
      item.qty === 1
        ? delete state.items[action.payload.productId]
        : item.qty--;
    },
    clearItems: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => Object.keys(state.cart.items).length;
export default cartSlice.reducer;
