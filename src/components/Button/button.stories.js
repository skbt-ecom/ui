import React from "react"

import { action } from "@storybook/addon-actions"

import { muiTheme } from "storybook-addon-material-ui"
// import icons from "@storybook/components/dist/icon/icons"

import Button from "./Button"
import ButtonESIA from "./ButtonESIA"

import theme from "../../style/theme"
import themeHalva from "../../style/themeHalva"

export default {
  title: "Button",
  decorators: [muiTheme([theme])],
}

export function Default() {
  return (
    <>
      <Button onClick={action("clicked btn")} classes={{ label: "my-label", root: "my-root" }}>
        Button
      </Button>
      <br />
      <br />
      <Button
        color="secondary"
        onClick={action("clicked btn")}
        classes={{ label: "my-label", root: "my-root" }}
      >
        Button
      </Button>
      <br />
      <br />
      <Button
        variant="outlined"
        onClick={action("clicked btn")}
        classes={{ label: "my-label", root: "my-root" }}
      >
        Button
      </Button>
      <br />
      <br />
      <Button disabled color="secondary" onClick={action("clicked btn")}>
        Button
      </Button>
    </>
  )
}

/**
 * Footer in Halva theme
 */
export function Halva() {
  return <Button onClick={action("clicked btn")}>Button</Button>
}

Halva.story = {
  decorators: [muiTheme([themeHalva])],
}

export function ESIA() {
  return (
    <ButtonESIA
      onClick={action("ESIA clicked")}
      // withouthDescr // to remove description text
    >
      Вход через цифровой профиль
    </ButtonESIA>
  )
}

// export function StorybookIcons() {
//   console.log(icons)
//   return (
//     <ul>
//       {Object.entries(icons).map(([type, icon], i) => (
//         <li key={i}>
//           <svg viewBox="0 0 1024 1024" width="15" height="15" style={{ marginRight: 10 }}>
//             <path fill="#333" d={icon} />
//           </svg>{" "}
//           {type}
//         </li>
//       ))}
//     </ul>
//   )
// }
