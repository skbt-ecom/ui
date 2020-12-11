import { makeStyles } from "@material-ui/styles"

import logo from "./img/logo.svg"

function styles(theme) {
  return {
    logo: {
      background: `url(${logo}) center/contain no-repeat`,
      width: 72,
      height: 25,

      [theme.breakpoints.up("sm")]: {
        width: 99,
      },

      [theme.breakpoints.up("lg")]: {
        width: 108,
      },
    },

    btn: {
      cursor: "pointer",
    },
  }
}

export default makeStyles(styles)
