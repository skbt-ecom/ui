import makeStyles from "@material-ui/core/styles/makeStyles"
import { lighten } from "@material-ui/core/styles/colorManipulator"

function styles(theme) {
  const lightenColor = lighten(theme.palette.primary.main, 0.4)

  return {
    root: {
      display: "flex",
      position: "relative",
      width: 200,
      minHeight: 150,
    },

    uploader: {
      width: "100%",
      padding: 10,
      flexDirection: "column",
      borderRadius: 4,
      border: `2px dashed ${lightenColor}`,
      transition: "0.3s border-color",

      "&:hover, &$active": {
        borderColor: theme.palette.primary.main,

        "& $uploadIcon": {
          fill: theme.palette.primary.main,
        },
      },
    },

    active: {},

    uploadIcon: {
      fill: lightenColor,
      transition: "0.3s fill",
      width: 40,
      height: 36,
    },

    imgOut: {
      objectFit: "cover",
      objectPosition: "center",
      width: "100%",
      height: "100%",
    },

    removeBtn: {
      position: "absolute",
      top: 8,
      right: 8,
      borderRadius: "50%",
      minWidth: "auto",
      padding: 0,
      width: 20,
      height: 20,

      [theme.breakpoints.up("sm")]: {
        width: 24,
        height: 24,
      },
    },

    removeIcon: {
      width: 13,
      height: 13,

      [theme.breakpoints.up("sm")]: {
        width: 17,
        height: 17,
      },
    },

    helperText: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
    },
  }
}

export default makeStyles(styles)
