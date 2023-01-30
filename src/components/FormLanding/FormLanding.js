import React, { useEffect, useState } from "react"
import { pushToDataLayerLoadedStep } from "../../utils/pushToDataLayerUtils"
import pushToDataLayer from "../../utils/pushToDataLayer"

import { Form } from "./FormContext/Form"

import useStyles from "./styles"

const FormLanding = (props, ref) => {
  const classes = useStyles(props)
  const { onSubmit, onChangeFields, children, name } = props
  const [clickOnInput, setClickOnInput] = useState(false)

  useEffect(() => {
    if (name) pushToDataLayerLoadedStep(name)
  }, [name])

  const handleClick = (e) => {
    if (!clickOnInput && e.target.nodeName === "INPUT") {
      pushToDataLayer({
        event: "Start_filling",
      })
      setClickOnInput(true)
    }
  }

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div
      className={classes.container}
      onClick={(e) => handleClick(e)}
      onKeyDown={(e) => handleClick(e)}
    >
      <Form onSubmit={onSubmit} onChangeFields={onChangeFields} ref={ref} name={name}>
        {children}
      </Form>
    </div>
  )
}

const ForwardedComponent = React.forwardRef(FormLanding)

export default React.memo(ForwardedComponent)
