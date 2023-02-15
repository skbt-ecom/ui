import "./globalThis.polyfill"

import React, { useState } from "react"

import { IMaskInput } from "react-imask"

import TextField from "@material-ui/core/TextField"

import splitProps from "./helpers/splitProps"

function CustomMaskInput({ onChange, ...props }) {
  function onAccept(value) {
    const name = props.id || props.name
    const e = {
      target: {
        value,
      },
    }

    if (name) {
      e.target.name = name
    }

    onChange(e)
  }

  return <IMaskInput {...props} onAccept={onAccept} />
}

export default function MaskedFieldSeven({ InputProps, ...props }) {
  const [textFieldProps, inputProps] = splitProps(props)

  const [focuSed, setFocused] = useState(false)
  const [selecTed, setSelected] = useState(false)

  // костыли для формы pkw

  const handleFocus = (e) => {
    console.log(e.target.value)
    if (!focuSed) {
      e.target.value = "+7 (___) ___-__-__"
    }
    setFocused(true)
  }

  const handleSelect = (e) => {
    if (e.target.selectionStart < 4) {
      e.target.selectionStart = 4
      e.target.selectionEnd = 4
    }

    if (!selecTed) {
      e.target.selectionStart = 4
      e.target.selectionEnd = 4
      setSelected(true)
    }
  }

  const handleKey = (e) => {
    if (e.target.selectionStart === 4 && e.key === "Backspace") {
      e.preventDefault()
    }
  }

  return (
    <TextField
      {...textFieldProps}
      onFocus={(e) => handleFocus(e)}
      onSelect={(e) => handleSelect(e)}
      onKeyDown={(e) => handleKey(e)}
      InputProps={{
        ...InputProps,
        inputProps,
        inputComponent: CustomMaskInput,
      }}
    />
  )
}

MaskedFieldSeven.defaultProps = {
  placeholderChar: "_",
  thousandsSeparator: "",
  lazy: true,
}
