import { createTheme } from "@mui/material";
import { ThemePallete } from "../themeConfig";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: ThemePallete.BLACK_PRIMARY,
    },
    secondary: {
      // Заглушка
      main: ThemePallete.BLACK_PRIMARY,
    },
  },
});
