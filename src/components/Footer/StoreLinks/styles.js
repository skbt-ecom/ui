import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  return {
    store: {
      display: "flex",
      padding: "24px 0",
    },

    link: {
      color: theme.palette.custom.footerText1,
      marginRight: "32px",
      width: 24,
      height: 24,

      "& svg": {
        width: 24,
        height: 24,

        "& :first-child": {
          fill: theme.palette.custom.footerText1,
        },
      },
    },

    iconInner: {
      fill: theme.palette.custom.footerBg,
    },
  }
}

export default makeStyles(styles)
