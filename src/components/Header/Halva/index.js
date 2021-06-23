import React from "react"

import HeaderContainer from "../HeaderContainer"
import { LogoRed } from "./Logo"

export default function Halva(props) {
  return <HeaderContainer {...props} Logo={LogoRed} />
}
