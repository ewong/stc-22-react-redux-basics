import { createSlice } from "@reduxjs/toolkit";

export const restoSlice = createSlice({
  name: "resto",
  initialState: {
    name: "",
    menu: {},
  },
  reducers: {
    setResto: (state, action) => {
      state.name = action.payload.name;
      state.menu = action.payload.menu;
    },
  },
});

const { setResto } = restoSlice.actions;

export const loadRestoAsync = () => (dispatch) => {
  setTimeout(() => {
    const name = "Golden Thai";
    const menu = {
      111: { id: 111, name: "Pad Thai", price: 11.95 },
      222: { id: 222, name: "Pad See Ew", price: 12.95 },
      333: { id: 333, name: "Pad Kaprao", price: 13.95 },
      444: { id: 444, name: "Green Curry", price: 14.95 },
      555: { id: 555, name: "Massaman Curry", price: 15.95 },
    };
    dispatch(setResto({ name, menu }));
  }, 500);
};

export const selectRestoName = state => state.resto.name;
export const selectRestoMenu = state => state.resto.menu;
export default restoSlice.reducer;
