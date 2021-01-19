import React from "react"

import PhoneMain from "./PhoneMain"

const story = {
  title: "PhoneMain",
}
export default story

export function Default() {
  return <PhoneMain />
}

export function CustomPhone() {
  return <PhoneMain phone="8 800 100-77-72" />
}

export function CustomHint() {
  return <PhoneMain phoneHint="Custom hint" />
}

export function CustomPhones() {
  return <PhoneMain phones={["8 800 100-77-72", "8 800 100-10-20"]} />
}
