import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  product: null,
  error: "",
};

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (productId, thunkAPI) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = null;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
