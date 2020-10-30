import React from "react"
import MUIDatePicker from "../../DatePicker"
import { Field } from "../FormContext/Field"

import { requiredValidator } from "../validators/requiredValidator"

import useStyles from "./styles"

function DatePicker(props) {
  return <MUIDatePicker {...props} />
}

export default function WrappedField(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.fieldWrapper}>
      <Field validate={requiredValidator} {...props} component={DatePicker} />
    </div>
  )
}
