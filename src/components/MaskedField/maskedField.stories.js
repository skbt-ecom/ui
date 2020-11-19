import React, { useState } from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { muiTheme } from "storybook-addon-material-ui"

// Import our component from this folder
import MaskedField from "./MaskedField"

import theme from "../../style/theme"

storiesOf("MaskedField", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => (
    <MaskedField
      onChange={action("onChange")}
      label={"MaskedField Number"}
      mask={Number}
      value={10}
      // InputProps={{
      //   startAdornment: (
      //     <InputAdornment position="start">
      //       <AccountCircle />
      //     </InputAdornment>
      //   ),
      // }}
    />
  ))
  .add("Thousands Separator", () => (
    <MaskedField
      onChange={action("onChange")}
      label={"MaskedField Number"}
      mask={Number}
      value={10}
      thousandsSeparator={" "}
    />
  ))
  .add("Dynamic value", () => {
    const [value, setValue] = useState(15)
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
              setValue(-100)
            }}
          >
            Set value = -100
          </button>

          <button
            onClick={() => {
              setValue(10)
            }}
          >
            Set value = 10
          </button>

          <button
            onClick={() => {
              setValue(200)
            }}
          >
            Set value = 200
          </button>
        </div>

        <MaskedField
          onChange={setValue}
          label={"MaskedField Number"}
          mask={Number}
          value={value}
          thousandsSeparator={" "}
          min={0}
          max={100}
        />
      </>
    )
  })
