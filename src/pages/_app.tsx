import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/index";
import { CssBaseline } from "@mui/material/";
import { useSelector } from "react-redux";
import { selectDarkState } from "../redux/dark";
import { wrapper } from "../redux/store";
import { saveInitialAppearance } from "../utils";
import { useDispatch } from "react-redux";
import { setDarkState } from "../redux/dark";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDarkState(saveInitialAppearance()));
  }, []);
  const isDark = useSelector(selectDarkState);
  let Them = theme(isDark);

  return (
    <ThemeProvider theme={Them}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
