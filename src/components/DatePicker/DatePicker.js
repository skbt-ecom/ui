import React, { useState } from "react"

import { KeyboardDatePicker } from "@material-ui/pickers"

import useStyles from "./styles"

export default function DatePicker({ onChange, ...restProps }) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(null)

  function handleChange(value) {
    const date = new Date(value.ts).toLocaleDateString("ru-RU")
    onChange && onChange(date)

    setSelectedValue(value)
  }

  return (
    <KeyboardDatePicker
      {...restProps}
      autoOk
      fullWidth
      disablePast
      disableToolbar
      format="dd.MM.yyyy"
      // variant="inline"
      value={selectedValue}
      onChange={handleChange}
      label="Выберите дату"
      inputVariant="outlined"
      className={classes.input}
      DialogProps={{
        classes: {
          dialog: classes.paper
        }
      }}
      KeyboardButtonProps={{
        "aria-label": "Выбрать дату"
      }}
    />
  )
}
