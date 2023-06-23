import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setuserId(state, action) {
      state.userId = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      state.isLogin = true;
    },
    clearAuth(state) {
      state.userId = null;
      state.token = null;
      state.isLogin = false;
    },
    login: (state, action) => {
      state.isLogin = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const { setuserId, setToken, clearAuth, login, logout } =
  authSlice.actions;

export default authSlice.reducer;
