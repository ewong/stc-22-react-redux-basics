import { createSlice } from "@reduxjs/toolkit";

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    products: {},
  },
  reducers: {
    setCatalog: (state, action) => {
      state.products = action.payload;
    },
  },
});

const { setCatalog } = catalogSlice.actions;

export const loadCatalogAsync = () => (dispatch) => {
  setTimeout(() => {
    const products = {
      111: { id: 111, name: "t-shirt", price: 1000 },
      222: { id: 222, name: "sweater", price: 3000 },
      333: { id: 333, name: "shorts", price: 1500 },
      444: { id: 444, name: "jeans", price: 5000 },
    };
    dispatch(setCatalog(products));
  }, 500);
};

export const selectCatalog = (state) => state.catalog.products;
export default catalogSlice.reducer;
