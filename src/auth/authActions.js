import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postLogin = createAsyncThunk(
  "post/login",
  async ({ loginData, push }) => {
    console.log("loginndsfkdsfke::", loginData);
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/auth/login`,
      loginData
    );
    return { data, push };
  }
);
