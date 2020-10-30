import React, { useState } from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"
import { action } from "@storybook/addon-actions"
import halvaLogo from "./halva.svg"

// Import our component from this folder
import Header from "./HeaderNew"

import theme from "../../style/theme"

storiesOf("HeaderNew", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => (
    <Header
      classes={{ header: "myHeader" }}
      ButtonProps={{
        color: "secondary",
        children: "Присоединиться",
        onClick: action("onButtonClick")
      }}
      PhoneProps={{
        classes: { phoneContainer: "my-phone" }
      }}
    />
  ))
  .add("Multiple phones", () => (
    <Header
      ButtonProps={{
        color: "secondary",
        children: "Присоединиться",
        onClick: action("onButtonClick")
      }}
      PhoneProps={{
        phones: ["8 927 463-12-81", "8 952 031-34-20", "8 952 031-34-21"]
      }}
    />
  ))
  .add("Custom content", () => <Header right={<img src={halvaLogo} alt="Халва" />} />)
  .add("Sticky header", () => {
    const lorem = `Voluptate duis minim esse voluptate in minim culpa id magna pariatur 
    sunt enim cillum. Amet magna consequat minim quis consectetur consectetur in labore 
    occaecat adipisicing. Mollit anim amet cillum deserunt voluptate deserunt do id irure 
    excepteur aliqua. Sunt duis sunt ex tempor deserunt cillum incididunt eiusmod do ad 
    veniam amet esse.`

    const loremlist = []
    for (let i = 0; i < 50; i++) {
      loremlist.push(lorem)
    }
    const [staticHeader, setStatic] = useState(false)
    return (
      <>
        <Header static={staticHeader} />
        {loremlist.map((lorem, i) => (
          <p key={i}>{lorem}</p>
        ))}
        <button onClick={() => setStatic(!staticHeader)}>Static/Sticky</button>
      </>
    )
  })
