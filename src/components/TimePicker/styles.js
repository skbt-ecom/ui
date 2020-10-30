import { makeStyles } from "@material-ui/core/styles"

function styles() {
  return {
    input: {
      '& [class*="MuiOutlinedInput-adornedEnd"]': {
        paddingRight: 0
      }
    },

    paper: {
      '& [class*="MuiPickersBasePicker-pickerView"]': {
        minHeight: 300,
        minWidth: 290,
        maxWidth: 290
      }
    }
  }
}

export default makeStyles(styles)
