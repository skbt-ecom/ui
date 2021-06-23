import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  const isBlack = theme.name === "black"
  // const color = isHalva ? "#979797" : isBlack ? "#fff" : "#a1afbf" // eslint-disable-line

  return {
    store: {
      display: "flex",
      justifyContent: "space-between",
      padding: "24px 0",
    },

    link: {
      border: `1px solid ${theme.palette.custom.grey500}`,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: theme.palette.custom.grey500,
      textDecoration: "none",
      fontSize: 10,
      width: 80,
      height: 80,

      "& svg": {
        width: 24,
        height: 24,

        "& :first-child": {
          fill: theme.palette.custom.grey500,
        },
      },
    },

    iconInner: {
      fill: isBlack ? theme.palette.primary.main : "#fff",
    },
  }
}

export default makeStyles(styles)
