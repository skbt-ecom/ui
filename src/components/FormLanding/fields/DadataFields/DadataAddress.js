import React, { useCallback } from "react"
import MateriaDadataAddress from "../../../DadataFields/DadataAddress"
import { Field } from "../../FormContext/Field"
import { addressDadataValidator } from "../../validators"

import useStyles from "../styles"

const DadataAddress = React.memo(({ onChange, ...props }) => {
  const handleBlur = useCallback(
    (e, values) => {
      onChange(values)
    },
    [onChange]
  )

  return <MateriaDadataAddress {...props} onBlur={handleBlur} />
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.dislayName = "DadataAddress"
WrappedField.defaultProps = {
  component: DadataAddress,
  validate: addressDadataValidator,
  defaultValue: {},
  validateOnBlur: false,
  fullWidth: true,
}

export default WrappedField
