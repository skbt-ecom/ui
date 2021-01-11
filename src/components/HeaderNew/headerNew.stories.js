import React, { useState } from "react"

import { action } from "@storybook/addon-actions"
import halvaLogo from "./img/halva.svg"

import Header from "./HeaderNew"

const story = {
  title: "HeaderNew",
}
export default story

export function Default() {
  return (
    <Header
      classes={{ header: "myHeader" }}
      ButtonProps={{
        color: "secondary",
        children: "Присоединиться",
        onClick: action("onButtonClick"),
      }}
      PhoneProps={{
        classes: { phoneContainer: "my-phone" },
      }}
    />
  )
}

export function MultiplePhones() {
  return (
    <Header
      ButtonProps={{
        color: "secondary",
        children: "Присоединиться",
        onClick: action("onButtonClick"),
      }}
      PhoneProps={{
        phones: ["8 927 463-12-81", "8 952 031-34-20", "8 952 031-34-21"],
      }}
    />
  )
}

export function CustomContent() {
  return <Header right={<img src={halvaLogo} alt="Халва" />} />
}

export function StickyHeader() {
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
}
