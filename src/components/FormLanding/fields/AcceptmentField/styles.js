import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  labelLabel: {
    fontWeight: 300,
    fontSize: 10,
    lineHeight: 1.2,
    padding: "9px 0",
  },

  labelRoot: {
    marginRight: 0,
  },

  helperTextRoot: {
    marginTop: -7,
  },

  checkboxRoot: {
    color: theme.name === "halva" ? "rgba(0, 0, 0, 0.38) !important" : theme.palette.primary.main,
  },
}))

export default useStyles
