import "./globalThis.polyfill"
import React, { useState, useEffect } from "react"
import { IMaskInput } from "react-imask"
import TextField from "@material-ui/core/TextField"
import withSpaceForHelperTxt from "../HOCs/withSpaceForHelperTxt"

const TextMaskCustom = React.memo(
  props => {
    const onAccept = (value, mask) => {
      props.onAccept(value)
    }

    return <IMaskInput {...props} onAccept={onAccept} />
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  }
)

const MaskedField = React.memo(props => {
  const { value: propsValueRaw } = props
  const propsValue = (propsValueRaw && propsValueRaw.toString()) || ""

  const [value, setValue] = useState(propsValue)

  useEffect(() => {
    if (props.value !== undefined) {
      let newValue = props.value
      if (props.max !== undefined || props.min !== undefined) {
        if (props.max < props.value) {
          newValue = props.max
        }

        if (props.min > props.value) {
          newValue = props.min
        }
      }
      if (newValue === 0) {
        newValue = ""
      }
      setValue(newValue.toString() || "")
    }
  }, [props.max, props.min, props.value])

  const handleAccept = value => {
    setValue(value)
    props.onChange(value)
  }

  const handleOnBlur = value => {
    props.onBlur(value)
  }

  const {
    mask,
    min,
    max,
    unmask,
    onChange,
    onBlur,
    thousandsSeparator = "",
    dispatch,
    lazy = true,
    placeholderChar = "_",
    InputProps,
    ...restProps
  } = props

  const inputProps = {
    onAccept: handleAccept,
    mask,
    unmask,
    value,
    max,
    thousandsSeparator,
    dispatch,
    lazy,
    placeholderChar,
    onBlur: handleOnBlur,
  }
  return (
    <TextField
      {...restProps}
      InputProps={{
        ...InputProps,
        inputComponent: TextMaskCustom,
        inputProps,
        classes: InputProps.classes,
      }}
    />
  )
})

MaskedField.defaultProps = {
  mask: Date,
  InputProps: {},
  onBlur: () => null,
}
export default withSpaceForHelperTxt(MaskedField)
