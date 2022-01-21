import React, { useEffect, useState } from "react"

import MaterialPhoneField from "../../PhoneField"
import { Field } from "../FormContext/Field"
import { phoneValidator } from "../validators/phoneValidator"

import useStyles from "./styles"

function PhoneFieldWithSeven({ onChange, defaultValue, ...props }) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)

  const phoneDispatch = (appended, dynamicMasked) => dynamicMasked.compiledMasks[0]

  const nullDispatch = () => null

  useEffect(() => {
    if (defaultValue) {
      onFocus()
    }
  }, [defaultValue])

  return (
    <MaterialPhoneField
      {...props}
      onChange={handleChange}
      defaultValue={defaultValue ? defaultValue.slice(1) : defaultValue}
      InputProps={{ onFocus }}
      dispatch={focused ? phoneDispatch : nullDispatch}
    />
  )
}

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
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
