import React from "react"

import { action } from "@storybook/addon-actions"

import Checkbox from "./Checkbox"
import CheckboxGroup from "./CheckboxGroup"

import "./Checkbox/styles.css"

const options = [
  { label: "Apple", value: "apple" },
  { label: "Pear", value: "pear" },
  { label: "Orange", value: "orange" },
]

const classesExample = {
  // available classes: https://material-ui.com/api/checkbox/#css
  checkboxClasses: {},
  // available classes: https://material-ui.com/api/form-control-label/#css
  labelClasses: { label: "my-checkbox-label" },
}

const Label = () => {
  const link = (
    <a href="https://app.sovcombank.ru/policy/" target="_blank" rel="noopener noreferrer">
      Правилами
    </a>
  )
  return <>Даю согласие на обработку своих персональных данных в соответствии с {link}</>
}

const story = {
  title: "Checkbox",
}
export default story

export function checkbox() {
  return (
    <>
      <Checkbox onChange={action("onChange")} label="Label" color="primary" value />
      <br />
      <Checkbox
        onChange={action("onChange")}
        label={<Label />}
        color="primary"
        classes={classesExample}
      />
    </>
  )
}

export function checkboxGroup() {
  return (
    <CheckboxGroup
      onChange={action("onChange")}
      options={options}
      formLabel={{
        label: "Label",
      }}
      color="primary"
      classes={{
        checkboxFormControlLabelRoot: "checkboxFormControlLabelRoot-class",
      }}
      checked={["pear"]}
      // error={true}
      // helperText={'Error message'}
    />
  )
}
