import { createTheme } from "@mui/material";
import { ThemePallete } from "../themeConfig";

export const darkTheme = createTheme({
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
