import React, { useState } from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { muiTheme } from "storybook-addon-material-ui"

// Import our component from this folder
import Slider from "./Slider"
import SliderLogarithmic from "./SliderLogarithmic"

import theme from "../../style/theme"
import { inputProps, sliderProps } from "./story.config"

const SliderWrapper = props => {
  const [step, setStep] = React.useState(1000)

  const getStepValue = sliderVal => {
    if (sliderVal < 300000) {
      return 1000
    }
    if (sliderVal < 1000000) {
      return 5000
    }
    return 100000
  }

  const handleOnChangeCommitted = value => {
    props.onChangeCommitted(value)
  }
  const handleOnChange = value => {
    setStep(getStepValue(value))
  }

  const dynamicStepSliderProps = {
    step: step
  }

  return (
    <>
      <Slider
        onChange={handleOnChange}
        onChangeCommitted={handleOnChangeCommitted}
        inputProps={inputProps}
        sliderProps={dynamicStepSliderProps}
        min={150000} // if no defaultValue using min value as initial
        max={30000000}
      />
    </>
  )
}

storiesOf("Slider", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => (
    <Slider
      onChange={action("onChange")}
      label={"Сумма кредита"}
      inputProps={inputProps}
      sliderProps={sliderProps}
      // defaultValue={300}
      min={100} // if no defaultValue using min value as initial
      max={2000}
      // value={500}
    />
  ))
  .add("Committed", () => (
    <Slider
      onChangeCommitted={action("onChangeCommitted")}
      label={"Сумма кредита"}
      inputProps={inputProps}
      sliderProps={sliderProps}
      min={150000}
      max={30000000}
    />
  ))
  .add("Dynamic step", () => <SliderWrapper onChangeCommitted={action("onChangeCommitted")} />)
  .add("Logarithmic", () => (
    <SliderLogarithmic
      // onChange={action('onChange')}
      onChangeCommitted={action("onChangeCommitted")}
      inputProps={inputProps}
      sliderProps={sliderProps}
      min={150000}
      max={30000000}
      defaultValue={2000000}
    />
  ))
  .add("Dynamic values", () => {
    const [min, setMin] = useState(100000)
    const [max, setMax] = useState(1000000)
    const [sum, SetSum] = useState(100000)

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "20px"
          }}
        >
          <span>Sum = {sum}</span>
          <button
            onClick={() => {
              SetSum(200000)
            }}
          >
            Set sum = 200000
          </button>

          <button
            onClick={() => {
              setMin(200000)
            }}
          >
            Set min = 200000
          </button>
          <button
            onClick={() => {
              setMax(500000)
            }}
          >
            Set max = 500000
          </button>
          <button
            onClick={() => {
              SetSum(100000)
              setMin(100000)
              setMax(1000000)
            }}
          >
            reset
          </button>
        </div>
        <Slider
          // onChange={action('onChange')}
          onChangeCommitted={SetSum}
          inputProps={inputProps}
          sliderProps={sliderProps}
          min={min}
          max={max}
          value={sum}
        />
      </>
    )
  })
