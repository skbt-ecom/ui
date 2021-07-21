import { createTheme } from "@material-ui/core/styles"

import { themeBase } from "./themeBase"

const PRIMARY_COLOR = "#003791"
const SECONDARY_COLOR = "#ff4b5f"

const theme = createTheme({
  ...themeBase,
  palette: {
    primary: { main: PRIMARY_COLOR },
    secondary: { main: SECONDARY_COLOR },
    custom: {
      text1: "#a1afbf",
      text2: "#607289",
      footerBg: "#fff",
      acceptmentCheckbox: PRIMARY_COLOR,
      acceptmentLabel: "inherit",
    },
  },
  overrides: {
    ...themeBase.overrides,
    MuiButton: {
      ...themeBase.overrides.MuiButton,
      containedSecondary: {
        "&:hover": {
          backgroundColor: "#EC3449",
        },
      },
    },
  },
})

export default theme
