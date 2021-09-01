import React from "react"

import { Helmet } from "react-helmet"

import ThemeProvider from "@material-ui/styles/ThemeProvider"

import Container from "../src/components/Container"

import { blueTheme } from "../src/styles/themes/blue"
import { redTheme } from "../src/styles/themes/red"
import { darkTheme } from "../src/styles/themes/dark"
import { blackTheme } from "../src/styles/themes/black"

import "./preview.css"

const themes = {
  blue: blueTheme,
  red: redTheme,
  dark: darkTheme,
  black: blackTheme,
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
