import React, { useState } from "react"

import isValid from "date-fns/isValid"

import { KeyboardDatePicker } from "@material-ui/pickers"

import useStyles from "./styles"

export default function DatePicker({ onChange, value = null, ...restProps }) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(value)

  function handleChange(val) {
    if (isValid(val) && onChange) {
      onChange(val)
    } else if (onChange) {
      onChange(null)
    }

    setSelectedValue(val)
  }

  return (
    <KeyboardDatePicker
      autoOk
      fullWidth
      disablePast
      disableToolbar
      label="Выберите дату"
      okLabel="Выбрать"
      cancelLabel="Отмена"
      KeyboardButtonProps={{
        "aria-label": "Выбрать дату",
      }}
      {...restProps}
      format="dd.MM.yyyy"
      // variant="inline"
      value={selectedValue}
      onChange={handleChange}
      className={classes.input}
      DialogProps={{
        classes: {
          dialog: classes.paper,
        },
      }}
    />
  )
}
