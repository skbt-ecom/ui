import React from "react"

import PageStatus from "./PageStatus"

const story = {
  title: "PageStatus",
}
export default story

export function Success() {
  return <PageStatus success />
}

export function CustomHeadTitle() {
  return <PageStatus success head="Custom head" title="Custom title" />
}

export function withContent() {
  return <PageStatus success content={<h3 style={{ marginBottom: 0 }}>Some content</h3>} />
}

export function Error() {
  return <PageStatus />
}

export function ErrorWithContent() {
  return (
    <PageStatus
      content={
        <h3 style={{ marginBottom: 0 }}>
          Some big big big big big big big big big big big big big big big big big big big big big
          big big big big big big big big big big big big big big big big big big big big big big
          big big big big big content
        </h3>
      }
    />
  )
}
