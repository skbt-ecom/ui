import React, { useState } from "react"

// 2.1.0
import { KeyboardTimePicker } from "@material-ui/pickers"

import useStyles from "./styles"

export default function TimePicker({ onChange, ...restProps }) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(null)

  function handleChange(value) {
    if (value && !value.invalid) {
      const time = new Date(value.ts).toLocaleTimeString("ru-RU")
      onChange && onChange(time)
    } else {
      onChange && onChange(null)
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
      inputVariant="outlined"
      // variant="inline"
      onChange={handleChange}
      className={classes.input}
      label="Выберите время"
      okLabel="Выбрать"
      cancelLabel="Отмена"
      DialogProps={{
        classes: {
          dialog: classes.paper
        }
      }}
      InputProps={{
        placeholder: "чч.мм"
      }}
      {...restProps}
      value={selectedValue}
    />
  )
}
