import { createTheme } from "@material-ui/core/styles"

import { themeBase } from "./base"

const PRIMARY_COLOR = "#ff4e50"
const SECONDARY_COLOR = "#9e9e9e"

export const redTheme = createTheme({
  ...themeBase,
  palette: {
    primary: { main: PRIMARY_COLOR },
    secondary: { main: SECONDARY_COLOR },
    custom: {
      headerPhone: SECONDARY_COLOR,
      headerPhoneHint: "#757575",
      footerText1: SECONDARY_COLOR,
      footerText2: "#757575",
      footerBg: "#fff",
      acceptmentCheckbox: "rgba(0, 0, 0, 0.38)",
      acceptmentLabel: "inherit",
    },
  },
  overrides: {
    ...themeBase.overrides,
    MuiButton: {
      ...themeBase.overrides.MuiButton,
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#ff3537",
        },
        "&:focus": {
          backgroundColor: "#ff1b1e",
        },
        "&$disabled": {
          backgroundColor: "#cbcbcb",
          color: "#fff",
        },
      },
      containedSecondary: {
        backgroundColor: "#fff",
        color: PRIMARY_COLOR,
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
        "&:focus": {
          backgroundColor: "ffe9ea",
        },
        "&$disabled": {
          backgroundColor: "#fff",
          color: "#cbcbcb",
        },
      },
      outlined: {
        ...themeBase.overrides.MuiButton.outlined,
        borderWidth: "2px !important",
      },
      outlinedPrimary: {
        borderColor: PRIMARY_COLOR,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
        "&:focus": {
          backgroundColor: "rgba(255, 78, 80, 0.12)",
        },
        "&$disabled": {
          borderWidth: 2,
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          color: "#cbcbcb",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: "#fce0b4",
        },
        "&:hover $notchedOutline": {
          borderColor: "#757575",
        },
      },
      input: {
        color: "#292929",
      },
    },
    MuiInputBase: {
      input: {
        "&$disabled": {
          color: "#bbb",
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#757575",
        },
      },
    },
    MuiFormHelperText: {
      root: {
        color: "#757575",
      },
    },
    MuiTypography: {
      colorTextPrimary: { color: "#2b2e42" },
    },
  },
})
