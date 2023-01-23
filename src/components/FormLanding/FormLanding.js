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

  const handleClick = () => {
    console.log(1)
    
  }

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div className={classes.container} onClick={handleClick} onKeyDown={handleClick}>
      <Form onSubmit={onSubmit} onChangeFields={onChangeFields} ref={ref} name={name}>
        {children}
      </Form>
    </div>
  )
}

const ForwardedComponent = React.forwardRef(FormLanding)

export default React.memo(ForwardedComponent)
