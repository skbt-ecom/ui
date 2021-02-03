import React from "react"

import { Form } from "./FormContext/Form"

import useStyles from "./styles"

const FormLanding = (props, ref) => {
  const classes = useStyles(props)
  const { onSubmit, onChangeFields, children } = props

  return (
    <div className={classes.container}>
      <Form onSubmit={onSubmit} onChangeFields={onChangeFields} ref={ref}>
        {children}
      </Form>
    </div>
  )
}

const ForwardedComponent = React.forwardRef(FormLanding)

export default React.memo(ForwardedComponent)
