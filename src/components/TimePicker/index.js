import React, { useState } from "react"

import { KeyboardTimePicker } from "@material-ui/pickers"

import useStyles from "./styles"

export default function TimePicker({ onChange, ...restProps }) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(null)

  function handleChange(value) {
    const time = new Date(value.ts).toLocaleTimeString("ru-RU")
    onChange && onChange(time)

    setSelectedValue(value)
  }

  return (
    <KeyboardTimePicker
      {...restProps}
      ampm={false}
      autoOk
      fullWidth
      // disableToolbar
      // variant="inline"
      value={selectedValue}
      onChange={handleChange}
      label="Выберите время"
      inputVariant="outlined"
      className={classes.input}
      DialogProps={{
        classes: {
          dialog: classes.paper
        }
      }}
      KeyboardButtonProps={{
        "aria-label": "Выбрать время"
      }}
    />
  )
}
