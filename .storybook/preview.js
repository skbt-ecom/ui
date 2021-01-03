import React from "react"

import { Helmet } from "react-helmet"

import ThemeProvider from "@material-ui/styles/ThemeProvider"
import themeBlue from "../src/style/theme"
import themeRed from "../src/style/themeHalva"
import themeDark from "../src/style/themeDark"

import "./preview.css"

const themes = {
  blue: themeBlue,
  red: themeRed,
  dark: themeDark,
}

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "blue",
    toolbar: {
      items: [
        { value: "blue", title: "Blue light theme", icon: "circle" },
        { value: "red", title: "Red light theme", icon: "accessibilityalt" },
        { value: "dark", title: "Dark theme", icon: "chromatic" },
      ],
    },
  },
}

function storyWrapper(Story, { globals }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link href="https://api-app.sovcombank.ru/cdn/fonts/bebas/bebas.css" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={themes[globals.theme]}>
        <Story />
      </ThemeProvider>
    </>
  )
}

export const decorators = [storyWrapper]
