import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    profileMenuEl: null,
  },
  reducer: {
    ProfileMenuClicked: (state, { payload }) => {
      state.profileMenuEl = payload.target;
    },
  },
});
