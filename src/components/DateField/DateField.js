import React from "react"

import MaskedField from "../MaskedField"

export default function DateField(props) {
  return <MaskedField {...props} mask={Date} />
}
