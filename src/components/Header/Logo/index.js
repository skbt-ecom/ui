import React from "react"
import halvaLogo from "../halva.svg"

const Logo = ({ classes }) => {
  return (
    <div>
      <img className={classes.halvaLogo} src={halvaLogo} alt="halva" />
    </div>
  )
}

export default Logo
