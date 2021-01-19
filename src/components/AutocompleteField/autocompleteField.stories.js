import React, { useState } from "react"

import { action } from "@storybook/addon-actions"

import AutocompleteField from "./AutocompleteField"
import REGIONS from "../../enums/regions"

const AutosuggestFieldWrapper = (props) => {
  const [value, setValue] = useState(props.value || null)

  const onChange = (event, value) => {
    setValue(value)
    props.onChange(event, value)
  }
  return (
    <>
      {/* <button
        onClick={() =>
          setValue({
            kladr_id: '29',
            value: 'Архангельская область',
            label: 'Архангельская область',
          })
        }
      >
        set Value
      </button> */}
      <AutocompleteField {...props} onChange={onChange} value={value} label={"Регион"} fullWidth />
    </>
  )
}

const story = {
  title: "AutocompleteField",
}
export default story

export function Default() {
  return <AutosuggestFieldWrapper onChange={action("onChange")} options={REGIONS} />
}
