import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  return {
    store: {
      display: "flex",
      justifyContent: "space-between",
      padding: "24px 0",
    },

    link: {
      border: `1px solid ${theme.palette.custom.text1}`,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: theme.palette.custom.text1,
      textDecoration: "none",
      fontSize: 10,
      width: 80,
      height: 80,

      "& svg": {
        width: 24,
        height: 24,

        "& :first-child": {
          fill: theme.palette.custom.text1,
        },
      },
    },

    iconInner: {
      fill: theme.palette.custom.footerBg,
    },
  }
}

export default makeStyles(styles)
