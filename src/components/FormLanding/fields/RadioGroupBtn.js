import React from "react"

import MaterialRadioGroupBtn from "../../RadioGroupBtn"

import { Field } from "../FormContext/Field"

function RadioGroupBtn(props) {
  return <MaterialRadioGroupBtn {...props} />
}

export default function WrappedField(props) {
  return <Field {...props} component={RadioGroupBtn} />
}
