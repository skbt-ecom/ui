import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 432,
    margin: "auto",
  },

  title: {
    fontSize: 32,
    maxWidth: 550,
    margin: "auto",
    textAlign: "center",
    marginBottom: 56,
  },

  containerElement: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  button: {
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: 240,
    },
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

  radioGroupBtn: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

export const useRadioBtnClasses = makeStyles((theme) => ({
  label: {
    marginRight: 0,

    "&:last-of-type": {
      marginRight: 0,
    },
  },

  input: {
    "&:checked": {
      "& + div": {
        backgroundColor: "transparent",
        "& span": {
          "& svg": {
            fill: theme.palette.primary.main,
          },
        },
      },
    },
  },

  box: {
    border: "none",
    width: 48,
    height: 48,
  },
}))
