import React, { useState } from "react"

import OtpInputs from "./OtpInputs"

const story = {
  title: "OtpInputs",
}
export default story

export function Default() {
  const [code, setCode] = useState("")

  return (
    <OtpInputs
      code={code}
      setCode={setCode}
      disabled={false}
      error
      errorMsg="Произошла ошибка"
      helperText={
        <>
          {"Запросить код повторно можно через "}
          <strong>25 сек</strong>
        </>
      }
    />
  )
}
