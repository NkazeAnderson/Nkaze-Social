import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    profileMenuEl: null,
    mobileSearchOpen: false,
  },
  reducers: {
    ProfileMenuClicked: (state, { payload }) => {
      state.profileMenuEl = payload.target;
    },
    MobileSearchClicked: (state) => {
      state.mobileSearchOpen = !state.mobileSearchOpen;
    },
    MobileSearchNotUSed: (state) => {
      state.mobileSearchOpen = false;
    },
  },
});
export const UiActions = uiSlice.actions;
