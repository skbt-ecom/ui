import React, { useEffect } from "react"
import {
  pushToDataLayerFormSuccess,
  pushToDataLayerLoadedStep,
  pushToDataLayerStepSuccess,
} from "../../utils/pushToDataLayer"

import { Form } from "./FormContext/Form"

import useStyles from "./styles"

const FormLanding = (props, ref) => {
  const classes = useStyles(props)
  const { onSubmit, onChangeFields, children, stepN } = props

  useEffect(() => {
    if (stepN) pushToDataLayerLoadedStep(stepN)
  }, [stepN])

  const handleSubmit = (fields) => {
    if (stepN) pushToDataLayerStepSuccess(stepN)
    else pushToDataLayerFormSuccess()
    onSubmit(fields)
  }

  return (
    <div className={classes.container}>
      <Form onSubmit={handleSubmit} onChangeFields={onChangeFields} ref={ref} stepN={stepN}>
        {children}
      </Form>
    </div>
  )
}

const ForwardedComponent = React.forwardRef(FormLanding)

export default React.memo(ForwardedComponent)
