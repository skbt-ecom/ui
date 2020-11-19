import React from "react"
import MaterialSliderLogarithmic from "../../Slider/SliderLogarithmic"
import { Field } from "../FormContext/Field"

import useStyles from "./styles"

const SliderLogarithmic = React.memo(props => {
  const handleChangeCommitted = value => {
    props.onChange(value)
  }

  return (
    <MaterialSliderLogarithmic
      {...props}
      onChangeCommitted={handleChangeCommitted}
      onChange={undefined}
    />
  )
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.displayName = "SliderLogarithmic"
WrappedField.defaultProps = {
  component: SliderLogarithmic,
  defaultValue: 150000,
  inputProps: { suffix: " ₽" },
  validateOnBlur: false,
}

export default WrappedField
