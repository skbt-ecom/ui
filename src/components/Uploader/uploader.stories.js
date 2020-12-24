import React from "react"

import { muiTheme } from "storybook-addon-material-ui"

import Uploader from "./Uploader"

import theme from "../../style/theme"
import themeHalva from "../../style/themeHalva"

export default {
  title: "Uploader",
  decorators: [muiTheme([theme])],
}

export function Default() {
  return (
    <Uploader helperText="Для загрузки выберите файл на Вашем устройстве" onLoad={console.log} />
  )
}

export function redTheme() {
  return <Uploader />
}

redTheme.story = {
  decorators: [muiTheme([themeHalva])],
}
