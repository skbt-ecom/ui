import { createMuiTheme } from "@material-ui/core/styles"

import { themeBase } from "./themeBase"

const theme = createMuiTheme({
  ...themeBase,
  palette: {
    primary: { main: "#003791" },
    secondary: { main: "#FF4B5F" },
    custom: { grey500: "#A1AFBF", grey600: "#607289" },
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
