import React from "react"

import Container from "./Container"

const story = {
  title: "Container",
}
export default story

export function Default() {
  return (
    <Container style={{ backgroundColor: "#C3DEB7" }}>
      <div style={{ backgroundColor: "#90BDE7", height: "50vh" }} />
    </Container>
  )
}
