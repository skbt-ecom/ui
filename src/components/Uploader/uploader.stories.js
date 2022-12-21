import React from "react"

import Uploader from "./Uploader"

const story = {
  title: "Uploader",
}
export default story

export function Default() {
  return (
    <>
      <Uploader
        helperText="Для загрузки выберите файл на Вашем устройстве"
        onLoad={console.log}
        classes={{ root: "root" }}
        documentType="autoPhoto"
        required
        // disabled
      />
      <Uploader
        helperText="Для загрузки выберите файл на Вашем устройстве"
        onLoad={console.log}
        classes={{ root: "root" }}
        documentType="autoSome"
        required
        // disabled
      />
      <Uploader
        helperText="Для загрузки выберите файл на Вашем устройстве"
        onLoad={console.log}
        classes={{ root: "root" }}
        documentType="autoTest"
        required={false}
        // disabled
      />
    </>
  )
}
