import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    logged_in: false,
    socket_id: null
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
    connectWebsocket: (state, {payload}) => {
      state.socket_id= payload;
    },
    disConnectWebsocket: (state) => {
      state.socket_id= null;
    },
  },
});
export const userActions = userSlice.actions;
