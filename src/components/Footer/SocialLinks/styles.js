import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  return {
    social: {
      display: "flex",
      alignItems: "center",
      justifyContent: (props) => props.justifyContent,
      marginBottom: 43,

      [theme.breakpoints.up("sm")]: {
        marginBottom: 29,
        paddingRight: (props) => props.paddingRight,
        justifyContent: "space-between !important",
      },
    },

    link: {
      textAlign: "center",
      fontSize: 0,
      color: "transparent",

      "& svg": {
        display: "inline-block",
        fill: theme.palette.custom.footerText1,
        width: 27,
        height: 25,
      },

      [theme.breakpoints.up("sm")]: {
        "& svg": {
          width: 16,
          height: 14,
        },
      },
    },
  }
}

export default makeStyles(styles)
