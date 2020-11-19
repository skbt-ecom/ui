import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  return {
    input: {
      '& [class*="MuiOutlinedInput-adornedEnd"]': {
        paddingRight: 0,
      },
    },

    paper: {
      '& [class*="MuiTypography-body1"]': {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: "23px",
        textTransform: "capitalize",
      },

      '& [class*="MuiTypography-body2"]': {
        fontSize: 12,
      },

      '& [class*="MuiPickersDay-current"]': {
        borderColor: theme.palette.primary.main,
      },
    },
  }
}

export default makeStyles(styles)
