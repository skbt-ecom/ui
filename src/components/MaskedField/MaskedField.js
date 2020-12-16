import "./globalThis.polyfill"

import React from "react"

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

export default function MaskedField({ InputProps, ...props }) {
  const [textFieldProps, inputProps] = splitProps(props)

  return (
    <TextField
      {...textFieldProps}
      InputProps={{
        ...InputProps,
        inputProps,
        inputComponent: CustomMaskInput,
      }}
    />
  )
}

MaskedField.defaultProps = {
  placeholderChar: "_",
  thousandsSeparator: "",
  lazy: true,
}
