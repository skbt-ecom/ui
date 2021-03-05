import React from "react"

import MaterialDateField from "../../DateField"
import { Field } from "../FormContext/Field"
import { dateValidator } from "../validators/dateValidator"
import { birthdateValidator } from "../validators/birthdateValidator"

import useStyles from "./styles"

function DateField({ onChange, ...props }) {
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
