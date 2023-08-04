import { createTheme } from "@mui/material";
import { ThemePalleteDK } from "../themeConfig";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: ThemePalleteDK.PRIMARY_BLUE,
    },
    secondary: {
      // Заглушка
      main: ThemePalleteDK.PRIMARY_BLUE,
    },
    text: {
      primary: ThemePalleteDK.PRIMARY_BLACK,
      secondary: ThemePalleteDK.SECONDARY,
    },
  },
});
