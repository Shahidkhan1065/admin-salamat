import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./authActions";

const auth = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  extraReducers: {
    [postLogin.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      localStorage.setItem("token", payload.data.token);
      localStorage.setItem("user", JSON.stringify(payload.data.user));
      payload.push("/");
    },
    [postLogin.rejected]: (state, { payload }) => {},
  },
});

export const authSlice = auth.reducer;
