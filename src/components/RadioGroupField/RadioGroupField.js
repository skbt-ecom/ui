import React from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"

import useStyles from "./styles"

export default function RadioGroupField(props) {
  const classes = useStyles(props)
  const { label, items, name, value, defaultValue, row, color } = props

  const handleChange = (e) => {
    const { value } = e.target

    props.onChange(value)
  }

  return (
    <FormControl component="fieldset" className={classes.formControl} fullWidth>
      {label && (
        <FormLabel component="legend" className={classes.formLabel}>
          {label}
        </FormLabel>
      )}
      <RadioGroup
        row={row}
        aria-label={label}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {items.map(({ value, label }, i) => (
          <FormControlLabel
            key={i}
            value={value}
            control={<Radio color={color} />}
            label={label}
            className={classes.formControlLabel}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

RadioGroupField.defaultProps = {
  row: true,
  color: "primary",
}
