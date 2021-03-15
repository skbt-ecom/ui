import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  const isHalva = theme.name === "halva"
  const isBlack = theme.name === "black"
  const color = isHalva ? "#979797" : isBlack ? "#fff" : "#a1afbf" // eslint-disable-line

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
      color,
      flexGrow: 1,
      textAlign: "center",
      marginBottom: 43,

      [theme.breakpoints.up("sm")]: {
        textAlign: "left",
        marginBottom: 0,
      },
    },

    phoneNum: {
      color: isHalva ? "#757575" : isBlack ? "#fff" : "#607289", // eslint-disable-line
      fontSize: 23,
      lineHeight: "23px",
    },

    phoneMultiple: {
      fontSize: 23,
      lineHeight: "23px",
      marginBottom: 8,
    },

    phoneHint: {
      fontSize: 10,
      letterSpacing: "0.2px",
      margin: 0,
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
        color,
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
      color,
      fontSize: 11,
      lineHeight: "18px",

      [theme.breakpoints.up("sm")]: {
        fontSize: 12,
        paddingTop: 16,
      },
    },

    showMore: {
      display: "inline-block",
      background: "transparent",
      border: 0,
      borderBottom: `1px solid ${isHalva ? color : isBlack ? "#fff" : "#607286"}`, // eslint-disable-line
      color: isHalva ? "#757575" : isBlack ? "#fff" : "#607286", // eslint-disable-line
      fontSize: 12,
      paddingTop: 8,
      lineHeight: isBlack ? 1 : "20px",
      cursor: "pointer",
      fontWeight: isBlack ? "bold" : "normal",
    },
  }
}

export default makeStyles(styles)
