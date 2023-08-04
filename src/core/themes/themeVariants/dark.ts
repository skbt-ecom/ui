import { createTheme } from "@mui/material";
import { ThemePalleteHalva } from "../themeConfig";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: ThemePalleteHalva.BLACK_PRIMARY,
    },
    secondary: {
      // Заглушка
      main: ThemePalleteHalva.BLACK_PRIMARY,
    },
    text: {
      primary: ThemePalleteHalva.BLACK_PRIMARY,
      secondary: ThemePalleteHalva.BLACK_PRIMARY,
    },
  },
});
