import React from "react"
import MaterialMaskedField from "../../MaskedField"
import { Field } from "../FormContext/Field"
import { requiredValidator } from "../validators/requiredValidator"

import useStyles from "./styles"

const MaskedField = React.memo(props => {
  return <MaterialMaskedField {...props} />
})

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
