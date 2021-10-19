import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
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
    width: "57px",
    height: "48px",

    [theme.breakpoints.up("sm")]: {
      width: "85px",
    },
    border: "1px solid transparent",
  },
}))

export default useStyles
