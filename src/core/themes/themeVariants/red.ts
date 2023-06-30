import { createTheme } from "@mui/material";
import { ThemePallete } from "../themeConfig";

export const redTheme = createTheme({
  palette: {
    primary: {
      main: ThemePallete.RED_PRIMARY,
    },
    secondary: {
      // Заглушка

      main: ThemePallete.RED_PRIMARY,
    },
  },
});
