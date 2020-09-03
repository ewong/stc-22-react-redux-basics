import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
  },
  reducers: {
    addCartItem: (state, action) => {
      const item = state.items[action.payload.productId];
      if (item === null) {
        state.items[action.payload.productId] = {
          productId: action.payload.productId,
          qty: 0,
        };
        return;
      }
      item.qty++;
    },
    removeCartItem: (state, action) => {
      const item = state.items[action.payload.productId];
      if (item === null) return;
      item.qty === 1 ? delete state.items[action.payload.productId] : item.qty--;
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.items;
export default cartSlice.reducer;
