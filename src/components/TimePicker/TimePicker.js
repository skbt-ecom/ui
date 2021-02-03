import React, { useState } from "react"

import { KeyboardTimePicker } from "@material-ui/pickers"

import useStyles from "./styles"

export default function TimePicker({ onChange, ...restProps }) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(null)

  function handleChange(value) {
    if (value && !value.invalid) {
      const time = new Date(value.ts).toLocaleTimeString("ru-RU")
      if (onChange) {
        onChange(time)
      }
    } else if (onChange) {
      onChange(null)
    }
    setSelectedValue(value)
  }

  return (
    <KeyboardTimePicker
      ampm={false}
      autoOk
      fullWidth
      // disableToolbar
      format="HH:mm"
      // variant="inline"
      onChange={handleChange}
      className={classes.input}
      label="Выберите время"
      okLabel="Выбрать"
      cancelLabel="Отмена"
      DialogProps={{
        classes: {
          dialog: classes.paper,
        },
      }}
      InputProps={{
        placeholder: "чч.мм",
      }}
      {...restProps}
      value={selectedValue}
    />
  )
}
