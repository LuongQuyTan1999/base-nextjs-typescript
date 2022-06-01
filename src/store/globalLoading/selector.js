import { createSelector } from "@reduxjs/toolkit";

import { initialState } from "./slice";

const selectDomain = (state) => state.globalLoading || initialState;

export const selectShowGlobalLoading = createSelector(
  [selectDomain],
  (globalLoadingState) => globalLoadingState.globalLoading
);
