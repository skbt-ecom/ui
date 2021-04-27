import React, { useState } from "react"

import isValid from "date-fns/isValid"

import { KeyboardTimePicker } from "@material-ui/pickers"

import useStyles from "./styles"

export default function TimePicker({ onChange, value = null, ...restProps }) {
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
