import React from "react"

import MaterialCheckbox from "../../Checkbox/Checkbox"

import { Field } from "../FormContext/Field"

function Checkbox(props) {
  function handleChange(e) {
    props.onChange(e.target.checked)
  }

  return <MaterialCheckbox {...props} onChange={handleChange} />
}

export default function WrappedField(props) {
  return <Field {...props} component={Checkbox} />
}
