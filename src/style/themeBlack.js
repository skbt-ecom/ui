import { createTheme } from "@material-ui/core/styles"
import { themeBase } from "./themeBase"

const PRIMARY_COLOR = "#0A0A0A"

export const themeBlack = createTheme({
  ...themeBase,
  palette: {
    primary: { main: PRIMARY_COLOR },
    custom: {
      headerPhone: PRIMARY_COLOR,
      headerPhoneHint: PRIMARY_COLOR,
      footerText1: "#fff",
      footerText2: "#fff",
      storeLinksColor: "#fff",
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
  },
})
