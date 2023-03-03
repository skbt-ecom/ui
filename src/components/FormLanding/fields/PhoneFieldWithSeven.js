import React, { useEffect, useState } from "react"

import MaterialPhoneField from "../../PhoneField"
import { Field } from "../FormContext/Field"
import { phoneValidator } from "../validators"

import useStyles from "./styles"

const phoneDispatch = (appended, dynamicMasked) => dynamicMasked.compiledMasks[0]
const nullDispatch = () => null

function PhoneFieldWithSeven({ onChange, defaultValue, onFocus, focused, ...props }) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  const onPaste = (e) => {
    let phone = e.clipboardData.getData("text").replace(/\D/g, "")

    if (phone.length === 11) {
      phone = phone.slice(1)
    }

    if (phone) {
      onChange(phone)
    }
  }

  return (
    <MaterialPhoneField
      {...props}
      onChange={handleChange}
      defaultValue={defaultValue ? defaultValue.slice(1) : defaultValue}
      InputProps={{ onFocus, onPaste }}
      dispatch={focused ? phoneDispatch : nullDispatch}
    />
  )
}

const WrappedField = ({ classsesComponent, defaultValue, ...props }) => {
  const changedDefaultValue = defaultValue.slice(1)

  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)

  useEffect(() => {
    if (defaultValue) {
      onFocus()
    }
  }, [defaultValue])

  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field
        {...props}
        defaultValue={defaultValue ? changedDefaultValue : defaultValue}
        onFocus={onFocus}
        focused={focused}
        classes={classsesComponent}
      />
    </div>
  )
}

WrappedField.displayName = "PhoneFieldWithSeven"
WrappedField.defaultProps = {
  component: PhoneFieldWithSeven,
  label: "Телефон",
  validate: phoneValidator,
  placeholder: "+7 (000) 000-00-00",
  unmask: true,
  defaultValue: "",
  fullWidth: true,
}

export default WrappedField
