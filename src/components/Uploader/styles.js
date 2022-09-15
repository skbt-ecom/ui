import makeStyles from "@material-ui/core/styles/makeStyles"
import { lighten } from "@material-ui/core/styles/colorManipulator"

function styles(theme) {
  const lightenColor = lighten(theme.palette.primary.main, 0.4)

  return {
    root: {
      display: "flex",
      position: "relative",
      width: 200,
      height: 200,
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

    without_border: {
      border: "none",
    },

    active: {},

    disabled: {
      borderColor: "#E8E8E8",

      "& $uploadIcon": {
        fill: "#E8E8E8",
      },
    },

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

    btnWrapper: {
      padding: 10,
      cursor: "pointer",
      position: "absolute",
      top: 8,
      right: 8,
    },

    largeBtn: {
      padding: 25,
    },

    removeBtn: {
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

    largeRemoveIcon: {
      width: 21,
      height: 21,

      [theme.breakpoints.up("sm")]: {
        width: 23,
        height: 23,
      },
    },

    helperText: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
    },

    lightbox: {
      position: "fixed",
      overflow: "hidden",
      zIndex: 999,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      visibility: "hidden",
      opacity: 0,
      transition: "ease 0.4s",
    },

    show: {
      visibility: "visible",
      opacity: 1,
    },

    show_image: {
      width: "70%",
      height: "70vh",
      objectFit: "contain",
    },
  }
}

export default makeStyles(styles)
