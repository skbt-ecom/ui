import React, { useCallback } from "react"
import MaterialDadataAuto from "../../../DadataFields/DadataAuto"
import { Field } from "../../FormContext/Field"
import { autoDadataValidator } from "./../../validators"

import useStyles from "../styles"

const DadataAuto = React.memo(({ onChange, ...props }) => {
  const handleBlur = useCallback(
    (e, values) => {
      onChange(values)
    },
    [onChange]
  )

  return <MaterialDadataAuto {...props} onBlur={handleBlur} />
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.dislayName = "DadataAuto"
WrappedField.defaultProps = {
  component: DadataAuto,
  validate: autoDadataValidator,
  defaultValue: {},
  validateOnBlur: false,
  fullWidth: true,
}

export default WrappedField
