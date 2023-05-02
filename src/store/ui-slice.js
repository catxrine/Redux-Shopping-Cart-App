import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        open: action.payload.open,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
