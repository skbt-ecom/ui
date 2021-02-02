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
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color,
      textDecoration: "none",
      fontSize: 11,
      width: 80,
      height: 80,

      "& svg": {
        width: 24,
        height: 24,

        "& :first-child": {
          fill: color,
        },
      },
    },
  }
}

export default makeStyles(styles)
