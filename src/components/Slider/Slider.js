import React, { useState, useEffect } from "react"

import Slider from "@material-ui/core/Slider"
import TextField from "@material-ui/core/TextField"

// https://github.com/s-yadav/react-number-format
import NumberFormat from "react-number-format"

import useStyles from "./styles"

// TODO: use debounce in onChange
const SliderComponent = React.memo((props) => {
  const classes = useStyles(props)
  const [value, setValue] = useState(props.defaultValue || props.value || props.min)
  const [min, setMin] = useState(props.min)
  const [max, setMax] = useState(props.max)

  useEffect(() => {
    if (props.value) {
      setValue(props.value)
    }
  }, [props.value])

  useEffect(() => {
    if (props.min !== min) {
      if (props.min > value) {
        setValue(props.min)
        // if (props.onChangeCommitted) {
        //   props.onChangeCommitted(props.min)
        // } else {
        //   props.onChange(props.min)
        // }
      }
      setMin(props.min)
    }
  }, [props.min, min, value])

  useEffect(() => {
    if (props.max !== max) {
      if (props.max < value) {
        setValue(props.max)
        // if (props.onChangeCommitted) {
        //   props.onChangeCommitted(props.max)
        // } else {
        //   props.onChange(props.max)
        // }
      }
      setMax(props.max)
    }
  }, [props.max, max, value])

  const handleSliderChange = (_event, newValue) => {
    if (value === newValue) {
      return
    }
    setValue(newValue)
    props.onChange(newValue)
  }

  const handleSliderChangeCommitted = (_event, newValue) => {
    if (props.onChangeCommitted) {
      setValue(newValue)
      props.onChangeCommitted(newValue)
    }
  }

  const handleInputChange = ({ floatValue = 0 }) => {
    if (floatValue !== value) {
      setValue(floatValue)
      if (props.onChangeCommitted) {
        props.onChangeCommitted(floatValue)
        return
      }
      props.onChange(floatValue)
    }
  }

  const handleInputBlur = () => {
    const { min: min1, max: max1 } = props
    let newValue = 0

    if (value <= min1) {
      newValue = min1
    } else if (value >= max1) {
      newValue = max1
    }

    if (newValue) {
      setValue(newValue)
      if (props.onChangeCommitted) {
        props.onChangeCommitted(newValue)
        return
      }
      props.onChange(newValue)
    }
  }
  const { sliderProps, inputProps, label } = props

  return (
    <div className={classes.container}>
      <NumberFormat
        {...inputProps}
        label={label}
        customInput={TextField}
        thousandSeparator={" "}
        value={value}
        onValueChange={handleInputChange}
        fullWidth
        allowNegative={false}
        decimalScale={0}
        onBlur={handleInputBlur}
      />
      <Slider
        {...sliderProps}
        classes={{
          root: classes.sliderRoot,
          markLabel: classes.sliderMarkLabel,
          mark: classes.sliderMark,
        }}
        value={value}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommitted}
        min={min}
        max={max}
      />
    </div>
  )
})

SliderComponent.defaultProps = {
  onChange: () => null,
}

export default SliderComponent
