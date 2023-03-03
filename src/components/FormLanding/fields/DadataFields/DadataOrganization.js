import React, { useCallback } from "react"
import MaterialDadataOrganization from "../../../DadataFields/DadataOrganization"
import { Field } from "../../FormContext/Field"
import { organizationValidator } from "../../validators"

import useStyles from "../styles"

const DadataOrganization = React.memo(({ onChange, ...props }) => {
  const handleBlur = useCallback(
    (e, values) => {
      onChange(values)
    },
    [onChange]
  )

  return <MaterialDadataOrganization {...props} onBlur={handleBlur} onChange={onChange} />
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.dislayName = "DadataOrganization"
WrappedField.defaultProps = {
  component: DadataOrganization,
  validate: organizationValidator,
  defaultValue: {},
  validateOnBlur: false,
  fullWidth: true,
}

export default WrappedField
