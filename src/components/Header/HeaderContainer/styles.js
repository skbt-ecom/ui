import { makeStyles } from "@material-ui/styles"

function styles(theme) {
  return {
    header: {
      width: "100%",
      backgroundColor: "#fff",
      boxShadow: "-1px 2px 4px rgba(0, 0, 0, 0.05)",
      position: "relative",
      zIndex: 10,
    },

    navigation: {
      height: 56,

      [theme.breakpoints.up("sm")]: {
        height: 64,
      },

      [theme.breakpoints.up("lg")]: {
        height: 88,
      },
    },
  }
}

export default makeStyles(styles)
