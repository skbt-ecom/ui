import React from "react"
import MaterialAutocompleteField from "../../AutocompleteField"
import { Field } from "../FormContext/Field"
import { autocompleteValidator } from "../validators"

import useStyles from "./styles"

const AutocompleteField = React.memo(props => {
  const onChange = (_, value) => {
    props.onChange(value)
  }

  return <MaterialAutocompleteField {...props} onChange={onChange} />
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.dislayName = "AutocompleteField"
WrappedField.defaultProps = {
  component: AutocompleteField,
  validate: autocompleteValidator,
  defaultValue: null,
  options: [],
  validateOnBlur: false,
  fullWidth: true,
}

export default WrappedField
