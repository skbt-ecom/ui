import { createTheme } from "@mui/material";
import { ThemePallete } from "../themeConfig";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: ThemePallete.BLUE_PRIMARY,
    },
    secondary: {
      // Заглушка
      main: ThemePallete.BLUE_PRIMARY,
    },
  },
});
