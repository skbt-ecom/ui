import { makeStyles } from "@material-ui/core/styles"

export const useAcceptmentStyles = makeStyles((theme) => ({
  labelLabel: {
    fontWeight: 300,
    fontSize: 12,
    lineHeight: 1.3,
    padding: "9px 0",
    color: theme?.palette?.custom?.acceptmentLabel,
  },

  labelRoot: {
    marginRight: 0,
  },

  helperTextRoot: {
    marginTop: -7,
  },

  checkboxRoot: {
    "&$checkboxChecked": {
      color: theme.palette.custom.acceptmentCheckbox,
    },
  },

  checkboxChecked: {},

  link: {
    fontWeight: "bold",
  },
}))
