import React from "react"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import Checkbox from "@material-ui/core/Checkbox"

const CheckboxComponent = React.memo(
  ({ label, error, helperText, value, onChange, classes = {}, ...restProps }) => {
    const { checkboxClasses, labelClasses, helperTextClasses } = classes

    return (
      <FormControl required error={error} component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                {...restProps}
                onChange={onChange}
                classes={checkboxClasses}
                checked={value}
              />
            }
            label={label}
            classes={labelClasses}
          />
        </FormGroup>
        {helperText && <FormHelperText classes={helperTextClasses}>{helperText}</FormHelperText>}
      </FormControl>
    )
  }
)

export default CheckboxComponent
