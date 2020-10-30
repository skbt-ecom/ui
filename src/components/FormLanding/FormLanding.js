import React from "react"

import { Form } from "./FormContext/Form"

import useStyles from "./styles"

const FormLanding = (props, ref) => {
  const classes = useStyles(props)

  return (
    <div className={classes.container}>
      <Form onSubmit={props.onSubmit} onChangeFields={props.onChangeFields} ref={ref}>
        {props.children}
      </Form>
    </div>
  )
}

const ForwardedComponent = React.forwardRef(FormLanding)

export default React.memo(ForwardedComponent)
