import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    logged_in: false
  },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
      state.logged_in = true;
    },
    changes: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
      state.logged_in = false;
    },
  },
});
export const userActions = userSlice.actions;
