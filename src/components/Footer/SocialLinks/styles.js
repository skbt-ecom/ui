import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  const isHalva = theme.name === "halva"
  const isBlack = theme.name === "black"

  return {
    social: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 43,

      [theme.breakpoints.up("sm")]: {
        marginBottom: 29,
        paddingRight: (props) => props.paddingRight,
      },
    },

    link: {
      textAlign: "center",
      fontSize: 0,
      color: "transparent",

      "& svg": {
        display: "inline-block",
        fill: isHalva ? "#979797" : isBlack ? "#fff" : "#a1afbf", // eslint-disable-line
        width: 27,
        height: 25,
      },

      [theme.breakpoints.up("sm")]: {
        "& svg": {
          width: 16,
          height: 14,
        },
      },
    },
  }
}

export default makeStyles(styles)
