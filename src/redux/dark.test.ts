import { darkSlice } from "./dark";
import { configureStore } from "@reduxjs/toolkit";

describe("testing dark Slice ", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  const store = configureStore({
    reducer: {
      [darkSlice.name]: darkSlice.reducer,
    },
    devTools: true,
  });
  test("should change darkSlice reducer", async () => {
    store.dispatch(darkSlice.actions.setDarkState(true));
    expect(store.getState().dark.dark).toEqual(true);
  });
});
