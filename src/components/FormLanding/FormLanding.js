import React, { useEffect } from "react"
import { pushToDataLayerLoadedStep } from "../../utils/pushToDataLayerUtils"

import { Form } from "./FormContext/Form"

import useStyles from "./styles"

const FormLanding = (props, ref) => {
  const classes = useStyles(props)
  const { onSubmit, onChangeFields, children, name } = props

  useEffect(() => {
    if (name) pushToDataLayerLoadedStep(name)
  }, [name])

  return (
    <div className={classes.container}>
      <Form onSubmit={onSubmit} onChangeFields={onChangeFields} ref={ref} name={name}>
        {children}
      </Form>
    </div>
  )
}

const ForwardedComponent = React.forwardRef(FormLanding)

export default React.memo(ForwardedComponent)
