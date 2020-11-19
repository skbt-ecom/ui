import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  return {
    modal: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },

    wrapper: {
      position: "relative",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",

      backgroundColor: "#ffffff",

      outline: 0,

      [theme.breakpoints.up("sm")]: {
        display: "block",
        width: 504,
        height: 452,
        height: "auto",

        borderRadius: 8,
      },

      [theme.breakpoints.up("md")]: {
        width: 624,
        height: 496,
      },
    },

    container: {
      padding: "88px 22px 88px",

      [theme.breakpoints.up("sm")]: {
        padding: "64px 56px 56px",
      },
    },

    closeButton: {
      position: "absolute",
      top: 32,
      right: 32,

      width: 16,
      height: 16,
      border: 0,
      outline: 0,
      cursor: "pointer",
    },

    title: {
      marginBottom: 16,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 23,
      lineHeight: "26px",
      color: "#292929",

      [theme.breakpoints.up("md")]: {
        fontSize: 32,
        lineHeight: "36px",
      },
    },

    subTitle: {
      marginBottom: 32,
      textAlign: "center",

      fontSize: 14,

      [theme.breakpoints.up("md")]: {
        fontSize: 18,
        marginBottom: 40,
      },
    },

    fieldWrapperAcceptment: {
      minHeight: 62,
    },

    buttonWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    buttonWidth: {
      [theme.breakpoints.up("sm")]: {
        width: 224,
      },
    },
  }
}

export default makeStyles(styles)
