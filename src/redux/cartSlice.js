import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  duplicateItems: false,
  totalPrice: 0,
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      let duplicate = false;
      state.items?.forEach((item) => {
        if (item.id === action.payload.id) {
          state.duplicateItems = true;
          duplicate = true;
          return;
        }
      });
      if (!duplicate) {
        state.items.push(action.payload);
        state.totalPrice = state.totalPrice + action.payload.price;
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => {
        if (item.id !== action.payload.id) {
          state.totalPrice = state.totalPrice - action.payload.price;
          return true;
        }
      });
      if (state.items.length === 0) {
        state.totalPrice = 0;
      }
    },
    checkout: () => initialState,
  },
});

export const { add, remove, checkout } = cartReducer.actions;
export default cartReducer.reducer;
