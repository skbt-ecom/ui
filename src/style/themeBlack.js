import { createMuiTheme } from "@material-ui/core/styles"
import { themeBase } from "./themeBase"

const PRIMARY_COLOR = "#0A0A0A"

const themeBlack = createMuiTheme({
  ...themeBase,
  name: "black",
  palette: {
    primary: { main: PRIMARY_COLOR },
  },
  overrides: {
    ...themeBase.overrides,
    MuiButton: {
      ...themeBase.overrides.MuiButton,
      root: {
        borderRadius: 0,
        height: 56,
      },
      label: {
        textTransform: "none",
        fontSize: "18px",
        lineHeight: "28px",
        letterSpacing: "0.8px",
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

export default themeBlack
