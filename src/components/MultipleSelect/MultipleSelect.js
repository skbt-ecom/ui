import React, { useState, useLayoutEffect } from "react"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Checkbox from "@material-ui/core/Checkbox"
import FormHelperText from "@material-ui/core/FormHelperText"

import withSpaceForHelperTxt from "../HOCs/withSpaceForHelperTxt"

import useStyles from "./styles"

const MultipleSelectComponent = React.memo((props) => {
  const classes = useStyles(props)
  const [labelWidth, setLabelWidth] = useState(0)
  const inputLabel = React.useRef(null)

  useLayoutEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const handleChange = (e) => {
    props.onChange(e)
  }

  const MenuProps = {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    variant: "menu",
  }

  const { helperText, error, value, items, name, fullWidth, label } = props

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      error={error}
      fullWidth={fullWidth}
    >
      <InputLabel ref={inputLabel} htmlFor={name}>
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        name={name}
        input={<OutlinedInput label={label} labelWidth={labelWidth} id={name} />}
        multiple
        renderValue={() => value.join(", ")}
        MenuProps={MenuProps}
      >
        {items.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <Checkbox
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
                checked={value.indexOf(option) > -1}
              />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
})

MultipleSelectComponent.defaultProps = {
  items: [],
}

export default withSpaceForHelperTxt(MultipleSelectComponent)
