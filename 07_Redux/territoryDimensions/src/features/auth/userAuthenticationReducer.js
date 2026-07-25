import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  user: {
    name: 'Chaitanya',
    email: '1',
    password: '1',
  },
};

const userAuthenticationReducer = createSlice({
  name: "authVerify",
  initialState,
  reducers: {
    Login: (state) => {
      state.isLogin = true;
    },
    Logout: (state) => {
      state.isLogin = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { Login, Logout, updateUser } = userAuthenticationReducer.actions;
export default userAuthenticationReducer.reducer;