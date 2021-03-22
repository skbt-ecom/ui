import React from "react"

import { Helmet } from "react-helmet"

import ThemeProvider from "@material-ui/styles/ThemeProvider"
import themeBlue from "../src/style/theme"
import themeRed from "../src/style/themeHalva"
import themeDark from "../src/style/themeDark"
import Container from "../src/components/Container"

import "./preview.css"

const themes = {
  blue: themeBlue,
  red: themeRed,
  dark: themeDark,
}

function storyWrapper(Story, { globals }) {
  const theme = themes[globals.theme || "blue"]

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link href="https://api-app.sovcombank.ru/cdn/fonts/bebas/bebas.css" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Container>
          <Story />
        </Container>
      </ThemeProvider>
    </>
  )
}

export const decorators = [storyWrapper]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
