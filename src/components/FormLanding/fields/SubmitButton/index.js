import React, { useContext } from "react"

import MUIButton from "@material-ui/core/Button"

import { FormContext } from "../../FormContext/Form"

export default function Button({ classsesComponent, ...props }) {
  const context = useContext(FormContext)

  const onClick = () => {
    context.onSubmit()
  }

  return <MUIButton fullWidth {...props} classes={classsesComponent} onClick={onClick} />
}
