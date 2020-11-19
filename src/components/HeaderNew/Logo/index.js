import React from "react"
import logo from "../logo.svg"

import useStyles from "./styles"

const Logo = props => {
  const { src, href, classes: propsClasses } = props
  const classes = useStyles()

  return (
    <a href={href} className={propsClasses.link}>
      <img className={`${classes.logo}  ${propsClasses.logo}`} src={src} alt="logo" />
    </a>
  )
}

Logo.defaultProps = {
  src: logo,
  href: "/",
  alt: "Совкомбанк",
  classes: {
    link: "",
    logo: "",
  },
}
export default Logo
