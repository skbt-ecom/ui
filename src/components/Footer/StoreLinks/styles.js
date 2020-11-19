import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  const color = theme.name === "halva" ? "#979797" : "#a1afbf"
  return {
    store: {
      display: "flex",
      justifyContent: "space-between",
      padding: "24px 0",
    },

    link: {
      border: "1px solid " + color,
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      color,
      textDecoration: "none",
      fontSize: 13,
      width: 128,
      height: 40,
      paddingLeft: 10,

      "@media screen and (min-width: 360px)": {
        width: 152,
      },

      [theme.breakpoints.up("sm")]: {
        width: 128,
      },

      "& svg": {
        fill: color,
        width: 22,
        height: 22,
      },

      "& span": {
        paddingLeft: 7,
      },
    },
  }
}

export default makeStyles(styles)
