import { configureStore } from "@reduxjs/toolkit";
import { darkSlice } from "./dark";
import { createWrapper } from "next-redux-wrapper";

export const store = () =>
  configureStore({
    reducer: {
      dark: darkSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(store);
