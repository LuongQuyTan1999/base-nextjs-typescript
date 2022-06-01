import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  globalLoading: false,
};

export const globalLoadingSlice = createSlice({
  name: "globalLoading",
  initialState,
  reducers: {
    showGlobalLoading(state, action) {
      state.globalLoading = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = globalLoadingSlice;
