import React from "react"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import Checkbox from "@material-ui/core/Checkbox"
import { makeStyles } from "@material-ui/core/styles"

import { getClassesFromProps } from "../../../utils"

const useStylesCheckbox = makeStyles({
  root: {},
  checked: {},
})
const useStylesLabel = makeStyles({
  root: {
    alignItems: "center",
  },
  label: {},
})
const useStylesHelperText = makeStyles({
  root: {},
})

const CheckboxComponent = React.memo((props) => {
  const checkboxClasses = props.classes
    ? // eslint-disable-next-line
      useStylesCheckbox(getClassesFromProps(props, "checkboxClasses"))
    : {}
  const labelClasses = props.classes
    ? // eslint-disable-next-line
      useStylesLabel(getClassesFromProps(props, "labelClasses"))
    : {}
  const helperTextClasses = props.classes
    ? // eslint-disable-next-line
      useStylesHelperText(getClassesFromProps(props, "helperTextClasses"))
    : {}

  const { label, error, helperText, classes, value, ...restProps } = props

  const handleChange = (event) => {
    props.onChange(event)
  }

  return (
    <FormControl required error={error} component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              {...restProps}
              onChange={handleChange}
              classes={{
                root: checkboxClasses.root,
                label: checkboxClasses.label,
              }}
              checked={value}
            />
          }
          label={label}
          classes={{
            root: labelClasses.root,
            label: labelClasses.label,
          }}
        />
      </FormGroup>
      {helperText && <FormHelperText classes={helperTextClasses}>{helperText}</FormHelperText>}
    </FormControl>
  )
})

export default CheckboxComponent
