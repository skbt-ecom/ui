import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  const isBlack = theme.name === "black"
  // const color = isHalva ? "#979797" : isBlack ? "#fff" : "#a1afbf" // eslint-disable-line

  return {
    footer: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 400,
      background: isBlack ? theme.palette.primary.main : "#fff",
      padding: "40px 0",

      [theme.breakpoints.up("sm")]: {
        padding: "64px 0",
      },

      "& img": {
        verticalAlign: "middle",
      },
    },

    root: {},

    inner: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },

    phoneContainer: {
      color: theme.palette.custom.grey500,
      flexGrow: 1,
      textAlign: "center",
      marginBottom: 43,

      [theme.breakpoints.up("sm")]: {
        textAlign: "left",
        marginBottom: 0,
      },
    },

    phoneNum: {
      // color: isHalva ? "#757575" : isBlack ? "#fff" : "#607289", // eslint-disable-line
      color: theme.palette.custom.grey600,
    },

    phoneMultiple: {
      marginBottom: 8,
    },

    copyright: {
      maxWidth: 312,

      [theme.breakpoints.down("xs")]: {
        margin: "0 auto",
      },

      [theme.breakpoints.up("sm")]: {
        maxWidth: 272,
      },

      [theme.breakpoints.up("md")]: {
        paddingBottom: 0,
      },

      "& p": {
        margin: 0,
        color: theme.palette.custom.grey500,
        fontSize: 14,
        lineHeight: "20px",
        paddingBottom: 8,

        "&:last-of-type": {
          paddingBottom: 0,
        },
      },
    },

    /**
     * Лигал
     */
    ligal: {
      color: theme.palette.custom.grey500,
      fontSize: 12,
      lineHeight: "18px",

      [theme.breakpoints.up("sm")]: {
        paddingTop: 16,
      },
    },

    showMore: {
      display: "inline-block",
      background: "transparent",
      border: 0,
      // borderBottom: `1px solid ${isHalva ? color : isBlack ? "#fff" : "#607286"}`, // eslint-disable-line
      borderBottom: `1px solid ${theme.palette.custom.grey600}`,
      // color: isHalva ? "#757575" : isBlack ? "#fff" : "#607286", // eslint-disable-line
      color: theme.palette.custom.grey600,
      fontSize: 12,
      paddingTop: 8,
      lineHeight: 1.2,
      cursor: "pointer",
      fontWeight: isBlack ? "bold" : "normal",
    },
  }
}

export default makeStyles(styles)
