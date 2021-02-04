import React, { useCallback } from "react"
import MaterialDadataOrganisation from "../../../DadataFields/DadataOrganisation"
import { Field } from "../../FormContext/Field"
import { organisationValidator } from "../../validators"

import useStyles from "../styles"

const DadataOrganisation = React.memo(({ onChange, ...props }) => {
  const handleBlur = useCallback(
    (e, values) => {
      onChange(values)
    },
    [onChange]
  )

  return <MaterialDadataOrganisation {...props} onBlur={handleBlur} />
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.dislayName = "DadataOrganisation"
WrappedField.defaultProps = {
  component: DadataOrganisation,
  validate: organisationValidator,
  defaultValue: {},
  validateOnBlur: false,
  fullWidth: true,
}

export default WrappedField
