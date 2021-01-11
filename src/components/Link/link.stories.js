import React from "react"

import { action } from "@storybook/addon-actions"

import Link from "../Link"

const story = {
  title: "Link",
}
export default story

export function Default() {
  return (
    <>
      <Link onClick={action("onClick")} component="button">
        Button Link
      </Link>
      <br />
      <Link onClick={action("onClick")} component="button" color="textPrimary">
        Button Link
      </Link>
    </>
  )
}
