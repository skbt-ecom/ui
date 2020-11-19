import { makeStyles } from "@material-ui/core/styles"

function styles(theme) {
  return {
    root: {
      position: "relative",
      width: 128,

      [theme.breakpoints.up("sm")]: {
        width: 153,
      },

      [theme.breakpoints.up("md")]: {
        width: 176,
      },
    },

    fail: {
      "& $uploader": {
        borderColor: theme.palette.secondary.main,
        marginBottom: 4,
      },

      "& $uploadIcon": {
        fill: theme.palette.secondary.main,
      },

      "& $hint": {
        color: theme.palette.secondary.main,
      },
    },

    uploader: {
      position: "relative",
      borderRadius: 4,
      border: "1px dashed #d2dce3",
      background: "#f9fafc",
      cursor: "pointer",
      transition: "0.3s border-color",
      marginBottom: 8,
      height: 88,
      width: "100%",

      [theme.breakpoints.up("sm")]: {
        marginBottom: 16,
        height: 104,
      },

      [theme.breakpoints.up("md")]: {
        height: 120,
      },

      "&:hover, &$active": {
        borderColor: "#607286",

        "& $uploadIcon": {
          fill: "#607286",
        },
      },
    },

    active: {},

    uploadIcon: {
      fill: "#a1afbf",
      transition: "0.3s fill",
      width: 40,
      height: 36,
    },

    linearProgress: {
      position: "absolute",
      right: -1,
      bottom: -1,
      left: -1,
      borderRadius: "0 0 4px 4px",
      backgroundColor: "#bfcee5",
      height: 6,

      [theme.breakpoints.up("sm")]: {
        height: 8,
      },
    },

    imgOut: {
      maxWidth: "100%",
      maxHeight: "100%",
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

    input: {
      display: "none",
    },

    errMsg: {
      color: theme.palette.secondary.main,
      fontSize: 8,
      marginBottom: 4,
    },

    hint: {
      fontSize: 10,
      lineHeight: "22px",

      [theme.breakpoints.up("sm")]: {
        fontSize: 14,
      },

      [theme.breakpoints.up("md")]: {
        fontSize: 16,
      },
    },
  }
}

export default makeStyles(styles)
