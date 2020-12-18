import React from "react"

import MaterialMaskedField from "../../MaskedField"
import { Field } from "../FormContext/Field"
import { requiredValidator } from "../validators/requiredValidator"

import useStyles from "./styles"

function MaskedField({ onChange, ...props }) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  return <MaterialMaskedField {...props} onChange={handleChange} />
}

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.displayName = "MaskedField"
WrappedField.defaultProps = {
  component: MaskedField,
  validate: requiredValidator,
  fullWidth: true,
}

export default WrappedField
