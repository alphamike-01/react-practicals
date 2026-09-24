import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      const product = state.items.find(i => i.id === action.payload.id);
      if (product) product.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
    },
    increment(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrement(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      else state.items = state.items.filter(i => i.id !== action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  }
});
export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export const store = configureStore({ reducer: { cart: cartSlice.reducer } });
