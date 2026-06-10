import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default appStore;
