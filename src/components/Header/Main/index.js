import React from "react"

import HeaderContainer from "../HeaderContainer"
import { LogoBlue } from "./Logo"

export default function Halva(props) {
  return <HeaderContainer {...props} Logo={LogoBlue} />
}
