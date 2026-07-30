// features/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      sessionStorage.setItem("loggedInUser", JSON.stringify(action.payload)); // Changed here
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("loggedInUser"); // Changed here
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
