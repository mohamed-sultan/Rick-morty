import { createTheme } from "@mui/material/styles";
import { yellow, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }

  interface PaletteColor {
    lighter?: string;
    darker?: string;
    white: string;
    black: string;
    purple: string;
    silver: string;
    red: string;
    blue: string;
    shadow: string;
    gray: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    white: string;
    black: string;
    purple: string;
    silver: string;
    red: string;
    blue: string;
    shadow: string;
    gray: string;
  }
}
const MainWhite = "#FFFFFF";
const MainBlue = "#030D2A";

const theme = (isDark: Boolean) =>
  createTheme({
    palette: {
      background: {
        default: isDark ? MainBlue : MainWhite,
      },
      primary: {
        white: isDark ? MainBlue : MainWhite,
        black: isDark ? MainWhite : MainBlue,
        main: "#CDCDCD",
        purple: isDark ? MainWhite : MainBlue,
        silver: "#cdcdcd",
        red: !isDark ? red.A400 : yellow.A400,
        blue: !isDark ? MainBlue : MainWhite,
        shadow: "rgba(0, 0, 0, 0.15)",
        gray: "#919191",
      },
    },
  });

export default theme;
