import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 432,
    margin: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 56,
  },
  radioGroup: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 48,
  },
  radioButton: {
    margin: 0,
  },

  fieldDescr: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "left",
    width: "100%",
  },
  textField: {
    marginBottom: 48,
  },
  cssOutlinedInputBlue: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  cssOutlinedInputRed: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.secondary.main} !important`,
    },
  },

  notchedOutline: {},

  cssFocused: {},
  button: {
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: 240,
    },
  },
}))

export default useStyles
