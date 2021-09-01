import { createTheme } from "@material-ui/core/styles"

import { themeBase } from "./base"

const PRIMARY_COLOR = "#003791"
const SECONDARY_COLOR = "#ff4b5f"

export const blueTheme = createTheme({
  ...themeBase,
  palette: {
    primary: { main: PRIMARY_COLOR },
    secondary: { main: SECONDARY_COLOR },
    custom: {
      headerPhone: "#a1afbf",
      headerPhoneHint: "#607289",
      footerText1: "#a1afbf",
      footerText2: "#607289",
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
