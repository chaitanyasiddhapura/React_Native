import { configureStore } from "@reduxjs/toolkit";
import backgroundThemeReducer from "../features/themes/backgroundThemeReducer";
import authReducer from "../features/auth/userAuthenticationReducer";

export const store = configureStore({
  reducer: {
    theme: backgroundThemeReducer,
    auth: authReducer,
  },
});