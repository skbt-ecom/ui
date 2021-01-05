import React, { useState } from "react"

import { muiTheme } from "storybook-addon-material-ui"

import InputAdornment from "@material-ui/core/InputAdornment"
import AccountCircle from "@material-ui/icons/AccountCircle"

import MaskedField from "./MaskedField"

import theme from "../../style/theme"

const story = {
  title: "MaskedField",
  decorators: [muiTheme([theme])],
}
export default story

export function Default() {
  const [value, setValue] = useState("15")

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <MaskedField
      onChange={handleChange}
      label="MaskedField Number"
      mask={Number}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  )
}

export function ThousandsSeparator() {
  const [value, setValue] = useState("15")

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <MaskedField
      onChange={handleChange}
      label="MaskedField Number"
      mask={Number}
      value={value}
      thousandsSeparator=" "
    />
  )
}

export function DynamicValue() {
  const [value, setValue] = useState("15")

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        <span>value={value} min=0 max=100</span>

        <button
          onClick={() => {
            setValue("-100")
          }}
        >
          Set value = -100
        </button>

        <button
          onClick={() => {
            setValue("10")
          }}
        >
          Set value = 10
        </button>

        <button
          onClick={() => {
            setValue("200")
          }}
        >
          Set value = 200
        </button>
      </div>

      <MaskedField
        onChange={handleChange}
        label="MaskedField Number"
        mask={Number}
        value={value}
        thousandsSeparator=" "
        min={0}
        max={100}
      />
    </>
  )
}
