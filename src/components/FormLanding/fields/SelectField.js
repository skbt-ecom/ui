import React from "react"
import MaterialSelect from "../../Select"
import { Field } from "../FormContext/Field"

import useStyles from "./styles"

const SelectField = React.memo(props => {
  const onChange = e => {
    props.onChange(e.target.value)
  }

  return <MaterialSelect {...props} onChange={onChange} />
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.displayName = "SelectField"
WrappedField.defaultProps = {
  component: SelectField,
  fullWidth: true,
  defaultValue: "",
}

export default WrappedField
