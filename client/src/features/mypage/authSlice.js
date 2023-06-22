import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memberId: null,
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMemberId(state, action) {
      state.memberId = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      state.isLogin = true;
    },
    clearAuth(state) {
      state.memberId = null;
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

export const { setMemberId, setToken, clearAuth, login, logout } =
  authSlice.actions;

export default authSlice.reducer;
