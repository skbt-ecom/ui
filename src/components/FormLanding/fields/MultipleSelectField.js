import React from "react"
import MaterialMultipleSelect from "../../MultipleSelect"
import { Field } from "../FormContext/Field"

import useStyles from "./styles"

const MultipleSelectField = React.memo((props) => {
  const onChange = (e) => {
    props.onChange(e.target.value)
  }

  return <MaterialMultipleSelect {...props} onChange={onChange} />
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.displayName = "MultipleSelectField"
WrappedField.defaultProps = {
  component: MultipleSelectField,
  fullWidth: true,
  defaultValue: [],
}

export default WrappedField
