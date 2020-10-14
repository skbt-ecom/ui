/**
 * BASED ON https://noteskeeper.ru/607/
 */

import React, { useState, useEffect } from "react"
import Slider from "@material-ui/core/Slider"
import TextField from "./TextField"
import NumberFormat from "react-number-format" //https://github.com/s-yadav/react-number-format
import { fromSlider, toSlider, round } from "./utils"
import withSpaceForHelperTxt from "../HOCs/withSpaceForHelperTxt"

import useStyles from "./styles"

const SliderComponent = React.memo(props => {
  const classes = useStyles(props)
  const [value, setValue] = useState(props.defaultValue || props.value || props.min)

  useEffect(() => {
    if (props.max > props.min) {
      if (value > props.max) {
        setValue(props.max)
        if (props.onChangeCommitted) {
          props.onChangeCommitted(props.max)
        } else {
          props.onChange(props.max)
        }
      }

      if (value < props.min) {
        setValue(props.min)
        if (props.onChangeCommitted) {
          props.onChangeCommitted(props.min)
        } else {
          props.onChange(props.min)
        }
      }
    }
  }, [props.max, props.min, value])

  useEffect(() => {
    if (props.value) {
      if (props.max || props.min) {
        let newValue = props.value

        if (props.max < props.value) {
          newValue = props.max
        }

        if (props.min > props.value) {
          newValue = props.min
        }

        setValue(newValue)
      } else {
        setValue(props.value)
      }
    }
  }, [props.max, props.min, props.value])

  const handleSliderChange = (_event, newValue) => {
    const viewValue = round(fromSlider(newValue))
    if (value === viewValue) {
      return
    }
    setValue(viewValue)
    props.onChange(viewValue)
  }

  const handleSliderChangeCommitted = (_event, newValue) => {
    const viewValue = round(fromSlider(newValue))
    if (props.onChangeCommitted) {
      setValue(viewValue)
      props.onChangeCommitted(viewValue)
    }
  }

  const handleInputChange = ({ floatValue = 0 }) => {
    if (floatValue !== value) {
      setValue(floatValue)
      if (props.onChangeCommitted) {
        return props.onChangeCommitted(floatValue)
      }
      props.onChange(floatValue)
    }
  }

  const handleInputBlur = e => {
    const { min, max } = props
    let newValue = 0

    if (value <= min) {
      newValue = min
    } else if (value >= max) {
      newValue = max
    }

    if (newValue) {
      setValue(newValue)
      if (props.onChangeCommitted) {
        return props.onChangeCommitted(newValue)
      }
      props.onChange(newValue)
    }
  }
  const { sliderProps, inputProps, label, min, max, defaultValue } = props

  return (
    <div className={classes.container}>
      <NumberFormat
        {...inputProps}
        label={label}
        className={classes.input}
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
          mark: classes.sliderMark
        }}
        defaultValue={defaultValue}
        value={toSlider(value)}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommitted}
        min={toSlider(min)}
        max={toSlider(max)}
        step={0.01}
      />
    </div>
  )
})

SliderComponent.defaultProps = {
  onChange: () => null
}

export default withSpaceForHelperTxt(SliderComponent)
