import React, { useState } from "react"

import { KeyboardDatePicker } from "@material-ui/pickers"

import useStyles from "./styles"

export default function DatePicker({ onChange, ...restProps }) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(null)

  function handleChange(value) {
    if (value && value instanceof Date && !Number.isNaN(value.valueOf())) {
      const date = value.toLocaleDateString("ru-RU")
      if (onChange) {
        onChange(date)
      }
    } else if (onChange) {
      onChange(null)
    }
    setSelectedValue(value)
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
