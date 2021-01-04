import React from "react"
import addons, { types } from "@storybook/addons"
import { useGlobals } from "@storybook/api"
import { Icons, IconButton, WithTooltip, TooltipLinkList } from "@storybook/components"

const ADDON_ID = "theme-switcher"
const PARAM_KEY = "theme"
const COLORS = {
  blue: "#00f",
  red: "#f00",
  dark: "#222",
}

addons.register(ADDON_ID, () =>
  addons.add(ADDON_ID, {
    title: "Themes",
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ThemeSwitcher,
  })
)

function getLinks(onClick) {
  return [
    { id: "blue", title: "Blue light theme", onClick },
    { id: "red", title: "Red light theme", onClick },
    { id: "dark", title: "Dark theme", onClick },
  ]
}

function ThemeSwitcher() {
  const [globals, updateGlobals] = useGlobals()
  const currentTheme = globals[PARAM_KEY] || "blue"

  function Tooltip({ onHide }) {
    function handleClick(e, { id }) {
      e.preventDefault()

      if (currentTheme !== id) {
        updateGlobals({ [PARAM_KEY]: id })
      }

      onHide()
    }

    return <TooltipLinkList links={getLinks(handleClick)} />
  }

  return (
    <WithTooltip placement="top" trigger="click" closeOnClick tooltip={Tooltip}>
      <IconButton
        active={true}
        style={{ color: COLORS[currentTheme] }}
        title="Global theme for components"
      >
        <Icons icon="circle" />
      </IconButton>
    </WithTooltip>
  )
}
