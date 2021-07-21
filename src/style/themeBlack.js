import { createTheme } from "@material-ui/core/styles"
import { themeBase } from "./themeBase"

const PRIMARY_COLOR = "#0A0A0A"

export const themeBlack = createTheme({
  ...themeBase,
  palette: {
    primary: { main: PRIMARY_COLOR },
    custom: {
      text1: "#fff",
      text2: "#fff",
      footerBg: PRIMARY_COLOR,
      acceptmentCheckbox: PRIMARY_COLOR,
      acceptmentLabel: "#555",
    },
  },
  overrides: {
    ...themeBase.overrides,
    MuiButton: {
      ...themeBase.overrides.MuiButton,
      root: {
        ...themeBase.overrides.MuiButton.root,
        borderRadius: 0,
      },
      label: {
        textTransform: "none",
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
    },
    MuiLink: {
      root: {
        color: PRIMARY_COLOR,
      },
    },
  },
})
