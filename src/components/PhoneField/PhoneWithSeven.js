import React from "react"
import MaskedFieldSeven from "../MaskedField/MaskedFieldSeven"

const PHONE_MASKS = [
  {
    mask: "+{7} (000) 000-00-00",
    lazy: false,
  },
  {
    mask: "{8} (000) 000-00-00",
    lazy: false,
  },
]

function dispatch(appended, dynamicMasked) {
  const number = (dynamicMasked.value + appended).replace(/\D/g, "")

  if (number) {
    return number.startsWith("") ? dynamicMasked.compiledMasks[0] : dynamicMasked.compiledMasks[1]
  }

  return null
}

export default function PhoneWhithSeven(props) {
  return <MaskedFieldSeven type="tel" mask={PHONE_MASKS} dispatch={dispatch} {...props} />
}
