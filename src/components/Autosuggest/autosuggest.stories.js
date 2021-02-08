import React, { useState } from "react"

import { action } from "@storybook/addon-actions"

import Autosuggest from "./Autosuggest"

import REGIONS from "../../enums/regions"

const AutosuggestFieldWrapper = (props) => {
  const [value, setValue] = useState(props.value || "") // eslint-disable-line

  const onChange = (v) => {
    setValue(v)
    props.onChange(v)
  }
  return (
    <>
      {/* <button
        onClick={() =>
          setValue({
            kladr_id: '29',
            value: 'Arhangel',
            label: 'Архангельская область',
          })
        }
      >
        set Value
      </button> */}
      <Autosuggest {...props} onChange={onChange} value={value} />
    </>
  )
}

const story = {
  title: "Autosuggest",
}
export default story

export function Default() {
  return (
    <>
      <h2>Пример с регионами</h2>
      <AutosuggestFieldWrapper
        onChange={action("onChange")}
        suggestions={REGIONS}
        label="Регион"
        fullWidth
        value={REGIONS[0]}
      />
    </>
  )
}
