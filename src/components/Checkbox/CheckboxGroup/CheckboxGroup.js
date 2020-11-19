import React, { useState, useEffect, useRef } from "react"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import Checkbox from "@material-ui/core/Checkbox"

import useStyles from "./styles"

const renderCheckboxItem = ({
  option: { label, value },
  handleChange,
  index,
  classes,
  color,
  checked,
}) => {
  return (
    <FormControlLabel
      classes={{
        root: classes.checkboxFormControlLabelRoot,
      }}
      key={index}
      control={
        <Checkbox onChange={handleChange(value)} value={value} color={color} checked={checked} />
      }
      label={label}
    />
  )
}

const CheckboxGroup = React.memo(props => {
  const classes = useStyles(props)
  const { options, error, helperText, formLabel = {}, color, ...restProps } = props
  const [checkedOptions, setCheckedOptions] = useState(props.checked || [])
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    props.onChange(checkedOptions)
  }, [checkedOptions])

  const handleChange = name => e => {
    if (e.target.checked) {
      setCheckedOptions(prevCheckedOptions => [...prevCheckedOptions, name])
    } else {
      setCheckedOptions(prevCheckedOptions => prevCheckedOptions.filter(el => el !== name))
    }
  }
  return (
    <FormControl error={error} component="fieldset">
      {formLabel.label && (
        <FormLabel component="legend" className={formLabel.className}>
          {formLabel.label}
        </FormLabel>
      )}
      <FormGroup>
        {options.map((option, index) =>
          renderCheckboxItem({
            option,
            handleChange,
            index,
            classes,
            color,
            checked: checkedOptions.findIndex(op => op === option.value) !== -1,
          })
        )}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
})

export default CheckboxGroup
