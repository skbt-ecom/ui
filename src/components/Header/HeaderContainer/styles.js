import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles((theme) => ({
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
      height: 88,
    },
  },

  stickyHeader: {
    top: 0,
  },

  logo: {
    cursor: "default",
    border: "0",
    background: "transparent",
    outline: "none",
    display: "inline-flex",
    alignItems: "center",
    padding: 5,
  },

  btn: {
    cursor: "pointer",
  },
}))

export const usePhoneStyles = makeStyles((theme) => ({
  phoneContainer: {
    display: "none",
    color: theme.palette.custom.headerPhone,

    [theme.breakpoints.up("md")]: {
      display: "block",
      marginRight: "40px",
    },
  },

  phoneNum: {
    color: theme.palette.custom.headerPhoneHint,
  },

  phoneMultiple: {
    marginBottom: 4,
    fontSize: 16,
    lineHeight: 1,
    color: theme.palette.custom.headerPhoneHint,

    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
  },
}))

export const useButtonStyles = makeStyles((theme) => ({
  root: {
    padding: "0 13px",
    height: 40,

    [theme.breakpoints.up("sm")]: {
      padding: "0 16px",
      height: 48,
    },
  },

  label: {
    fontSize: 12,

    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
  },
}))
