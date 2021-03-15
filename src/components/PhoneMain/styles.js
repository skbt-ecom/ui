import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  phoneContainer: {
    color: "#a1afbf",
  },

  phoneMultiple: {},

  phoneHint: {
    fontSize: 12,
  },

  phoneNum: {},

  buttonRoot: {
    padding: "8px 20px",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  buttonLabel: {
    fontSize: 16,
    lineHeight: "20px",
  },
}))

export default useStyles
