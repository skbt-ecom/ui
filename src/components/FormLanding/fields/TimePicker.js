import React from "react"
import TimePicker from "../../TimePicker"
import { Field } from "../FormContext/Field"

import requiredValidator from "../validators/required"

import useStyles from "./styles"

export default function WrappedField(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.fieldWrapper}>
      <Field validate={requiredValidator} {...props} component={TimePicker} />
    </div>
  )
}
