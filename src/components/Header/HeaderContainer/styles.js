import { makeStyles } from "@material-ui/styles"

function styles(theme) {
  return {
    header: {
      width: "100%",
      backgroundColor: "#fff",
      boxShadow: "-1px 2px 4px rgba(0, 0, 0, 0.05)",
      zIndex: 10,
      position: "sticky",
    },

    navigation: {
      height: 64,

      [theme.breakpoints.up("sm")]: {
        height: 80,
      },

      [theme.breakpoints.up("md")]: {
        height: 104,
      },
    },

    stickyHeader: {
      top: 0,
    },
  }
}

export default makeStyles(styles)
