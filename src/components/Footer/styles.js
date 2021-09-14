import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  return {
    footer: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 400,
      background: theme.palette.custom.footerBg,
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
      color: theme.palette.custom.footerText1,
      flexGrow: 1,
      textAlign: "center",
      marginBottom: 43,

      [theme.breakpoints.up("sm")]: {
        textAlign: "left",
        marginBottom: 0,
      },
    },

    phoneNum: {
      color: theme.palette.custom.footerText2,
    },

    phoneMultiple: {
      marginBottom: 8,
    },

    copyright: {
      width: "100%",
      maxWidth: 312,
      margin: "0 auto",

      [theme.breakpoints.up("sm")]: {
        margin: 0,
        maxWidth: 272,
      },

      [theme.breakpoints.up("md")]: {
        paddingBottom: 0,
      },

      "& p": {
        margin: 0,
        color: theme.palette.custom.footerText1,
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
      color: theme.palette.custom.footerText1,
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
      borderBottom: `1px solid ${theme.palette.custom.footerText2}`,
      color: theme.palette.custom.footerText2,
      fontSize: 12,
      paddingTop: 8,
      lineHeight: 1.2,
      cursor: "pointer",
      fontWeight: 500,
    },
  }
}

export default makeStyles(styles)
