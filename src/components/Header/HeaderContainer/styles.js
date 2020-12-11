import { makeStyles } from "@material-ui/styles"

function styles(theme) {
  return {
    header: {
      width: "100%",
      backgroundColor: "#fff",
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
