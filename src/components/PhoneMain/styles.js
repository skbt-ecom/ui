import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  phoneContainer: {
    color: theme.palette.custom.grey500,
  },

  phoneMultiple: {},

  phoneHint: {
    marginTop: 4,
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
