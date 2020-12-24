import React from "react"

import MUITexteField from "@material-ui/core/TextField"
import { Field } from "../FormContext/Field"

import useStyles from "./styles"

function TextField({ onChange, ...props }) {
  function handleChange(e) {
    onChange(e.target.value)
  }

  return <MUITexteField {...props} onChange={handleChange} />
}

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)

  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.displayName = "TextField"
WrappedField.defaultProps = {
  component: TextField,
  defaultValue: "",
  fullWidth: true,
}

export default WrappedField
