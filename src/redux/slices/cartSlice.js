import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartStorage =
  localStorage.getItem("carts") !== null
    ? JSON.parse(localStorage.getItem("carts"))
    : [];

const initialState = {
  loading: false,
  carts: cartStorage,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.carts.find((cart) => cart.id === action.payload.id);
      if (!isExist) {
        state.carts.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("carts", JSON.stringify(state.carts));
        toast.success("1 item added to cart");
      }
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(state.carts));
      toast.success("item removed from cart");
    },
    incQty: (state, action) => {
      const cart = state.carts.find((cart) => cart.id === action.payload);
      cart.quantity += 1;
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    decQty: (state, action) => {
      const cart = state.carts.find((cart) => cart.id === action.payload);

      if (cart.quantity !== 1) {
        cart.quantity -= 1;
        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
  },
});

export const { addToCart, removeFromCart, incQty, decQty } = cartSlice.actions;

export default cartSlice.reducer;
