import React, { useEffect } from "react"

import MaterialDateField from "../../DateField"
import { Field } from "../FormContext/Field"
import { dateValidator, birthdateValidator } from "../validators"

import useStyles from "./styles"

function DateField({ incomingValue, onChange, ...props }) {
  useEffect(() => {
    if (incomingValue) {
      onChange(incomingValue)
    }
  }, [incomingValue, onChange])

  function handleChange(e) {
    onChange(e.target.value)
  }

  return <MaterialDateField {...props} onChange={handleChange} />
}

const WrappedField = ({ validAgeMin, validAgeMax, classsesComponent, ...props }) => {
  const classes = useStyles(props)
  const isAgeValidationRequred = validAgeMin || validAgeMax
  const validator = isAgeValidationRequred
    ? (value) => birthdateValidator(value, { validAgeMin, validAgeMax })
    : dateValidator

  return (
    <div className={classes.fieldWrapper}>
      <Field validate={validator} {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.displayName = "DateField"
WrappedField.defaultProps = {
  component: DateField,
  defaultValue: "",
  fullWidth: true,
}

export default WrappedField
