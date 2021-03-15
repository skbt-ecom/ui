import { makeStyles } from "@material-ui/styles"

import logo from "./img/logo.svg"

export const useStyles = makeStyles((theme) => ({
  logo: {
    cursor: "default",
    border: "0",
    color: "transparent",
    outline: "none",
    background: `url(${logo}) center/contain no-repeat`,
    width: 128,
    height: 24,

    [theme.breakpoints.up("sm")]: {
      width: 160,
    },

    [theme.breakpoints.up("lg")]: {
      width: 192,
    },
  },

  btn: {
    cursor: "pointer",
  },
}))

export const usePhoneStyles = makeStyles((theme) => ({
  phoneContainer: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "block",
      marginRight: "40px",
    },
  },

  phoneMultiple: {
    marginBottom: 4,
    fontSize: 16,
    lineHeight: "16px",

    [theme.breakpoints.up("md")]: {
      fontSize: 20,
      lineHeight: "20px",
    },
  },
}))

export const useButtonStyles = makeStyles({
  root: {
    padding: "8px 20px",
    maxHeight: 36,
  },

  label: {
    fontSize: 16,
  },
})
