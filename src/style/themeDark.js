import { createTheme } from "@material-ui/core/styles"

const PRIMARY_COLOR = "#fff"

const theme = createTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#fff",
    },
    primary: {
      main: "#fff",
    },
    secondary: { main: "#FF4B5F" },
    custom: {
      headerPhone: "#a1afbf",
      headerPhoneHint: "#607289",
      footerText1: "#a1afbf",
      footerText2: "#607289",
      storeLinksColor: "#C1C9D2",
      footerBg: "#292929",
      acceptmentCheckbox: PRIMARY_COLOR,
      acceptmentLabel: "inherit",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      root: {
        paddingTop: "11px",
        paddingBottom: "11px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        letterSpacing: "1px",
        fontSize: "20px",
      },
      contained: {
        boxShadow: "none",
      },
      // Name of the rule
      textPrimary: {
        // Some CSS
        background: "#003791",
        "@media (hover: none)": {
          backgroundColor: "rgb(0, 38, 101) !important",
        },
        "&:hover": {
          backgroundColor: "rgb(0, 38, 101)",
        },
        "&$disabled": {
          backgroundColor: "#232323 !important",
          color: "#6b6b6b",
        },
      },
    },
  },
})

if (process.env.NODE_ENV !== "production") {
  console.error('⚠️ Deprecation theme "themeDark". Use the "/styles/themes/dark" instead')
}
/**
 * @deprecated use /styles/themes/dark instead
 */
export default theme
