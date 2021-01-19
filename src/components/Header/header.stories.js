import React from "react"

import HeaderHalva from "./Halva"

const story = {
  title: "Header",
}
export default story

export function Halva() {
  return (
    <div style={{ border: "1px solid #000" }}>
      <HeaderHalva classes={{ logo: "asdasd", other: { header: "asd" } }} />
    </div>
  )
}

export function withRightBlock() {
  return (
    <div style={{ border: "1px solid #000" }}>
      <HeaderHalva classes={{ logo: "asdasd", other: { header: "asd" } }}>right</HeaderHalva>
    </div>
  )
}
