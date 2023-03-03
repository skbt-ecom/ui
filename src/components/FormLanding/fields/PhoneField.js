import React from "react"

import MaterialPhoneField from "../../PhoneField"
import { Field } from "../FormContext/Field"
import { phoneValidator } from "../validators"

import useStyles from "./styles"

function PhoneField({ onChange, ...props }) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  return <MaterialPhoneField {...props} onChange={handleChange} />
}

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.displayName = "PhoneField"
WrappedField.defaultProps = {
  component: PhoneField,
  label: "Телефон",
  validate: phoneValidator,
  placeholder: "+7 (000) 000-00-00",
  unmask: true,
  defaultValue: "",
  fullWidth: true,
}

export default WrappedField
