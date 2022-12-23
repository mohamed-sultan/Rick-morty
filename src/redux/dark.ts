import { createSlice } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  dark: false,
};

interface IBannerContent {
  dark: boolean;
}
export const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    setDarkState(state, action) {
      state.dark = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state: any, { payload }: any) => {
        /* istanbul ignore next */
        return {
          ...state,
          ...payload.dark,
        };
      },
    },
  },
});

export const setDarkState = (val: Boolean) =>
  darkSlice.actions.setDarkState(val);

export const selectDarkState = (state: { dark: IBannerContent }) =>
  state.dark.dark;

export default darkSlice.reducer;
