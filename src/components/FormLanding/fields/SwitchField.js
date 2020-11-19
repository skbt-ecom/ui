import React from "react"

import MaterialSwitch from "../../Switch"

import { Field } from "../FormContext/Field"

function Switch(props) {
  function handleChange(e) {
    props.onChange(e.target.checked)
  }

  return <MaterialSwitch {...props} onChange={handleChange} />
}

export default function WrappedField(props) {
  return <Field {...props} component={Switch} />
}
