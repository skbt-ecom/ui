import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  const isHalva = theme.name === "halva"
  const isBlack = theme.name === "black"
  const color = isHalva ? "#979797" : isBlack ? "#fff" : "#a1afbf" // eslint-disable-line

  return {
    store: {
      display: "flex",
      justifyContent: "space-between",
      padding: "24px 0",
    },

    link: {
      border: `1px solid ${color}`,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color,
      textDecoration: "none",
      fontSize: 10,
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

    iconInner: {
      fill: isBlack ? theme.palette.primary.main : "#fff",
    },
  }
}

export default makeStyles(styles)
