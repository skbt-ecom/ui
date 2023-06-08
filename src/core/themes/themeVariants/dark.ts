import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
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
    background: {
      default: blueGrey["800"],
      paper: blueGrey["700"],
    },
  },
});
