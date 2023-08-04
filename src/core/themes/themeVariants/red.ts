import { createTheme } from "@mui/material";
import { ThemePalleteHalva } from "../themeConfig";

export const redTheme = createTheme({
  palette: {
    primary: {
      main: ThemePalleteHalva.RED_PRIMARY,
    },
    secondary: {
      // Заглушка

      main: ThemePalleteHalva.RED_PRIMARY,
    },
    text: {
      primary: ThemePalleteHalva.PRIMARY_BLACK,
      secondary: ThemePalleteHalva.SECONDARY,
    },
  },
});
