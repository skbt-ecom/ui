import React, { useState } from "react"

import VerifyCodeArray from "./VerifyCodeArray"

const story = {
  title: "VerifyCodeArray",
}
export default story

export function Default() {
  const [code, setCode] = useState(Array(4).fill(""))

  return (
    <VerifyCodeArray
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
