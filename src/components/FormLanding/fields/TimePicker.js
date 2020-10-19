import React from "react"
import MUITimePicker from "../../TimePicker"
import { Field } from "../FormContext/Field"

import { requiredValidator } from "../validators/requiredValidator"

import useStyles from "./styles"

function TimePicker(props) {
  return <MUITimePicker {...props} />
}

export default function WrappedField(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.fieldWrapper}>
      <Field validate={requiredValidator} {...props} component={TimePicker} />
    </div>
  )
}
