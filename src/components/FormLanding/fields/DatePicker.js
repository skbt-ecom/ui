import React from "react"

// import parse from "date-fns/parse"

import DatePicker from "../../DatePicker"
import { Field } from "../FormContext/Field"

import requiredValidator from "../validators/required"

import useStyles from "./styles"

export default function WrappedField(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.fieldWrapper}>
      <Field
        validate={requiredValidator}
        {...props}
        component={DatePicker}
        // defaultValue={parse("19.09.1992", "dd.MM.yyyy", new Date())}
      />
    </div>
  )
}
