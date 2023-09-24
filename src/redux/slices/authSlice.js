import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  token: "",
  user: "",
};

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        `https://fakestoreapi.com/auth/login`,
        credentials
      );
      return { token: res.data.token, user: credentials };
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.loading = false;
      state.error = null;
      state.isLoggedIn = false;
      state.user = "";
      state.token = "";

      localStorage.clear("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user.username;
      state.error = null;
      state.token = action.payload.token;

      //store token
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Login failed";
      state.isLoggedIn = false;
      state.user = "";
      state.token = "";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
