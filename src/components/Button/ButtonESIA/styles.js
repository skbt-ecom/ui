import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    position: "relative",
  },
  bwtContainer: {
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: "4px 4px 0px 0px",
    backgroundColor: "#D9E6EF",
    padding: "16px 24px 16px 72px",
    width: "100%",
    height: "64px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      padding: "16px 24px 16px 80px",
    },
  },
  bwtLeft: {
    display: "flex",
    minWidth: 114,
  },
  bwtText: {
    display: "flex",
    alignItems: "center",
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    fontSize: 12,
    lineHeight: "14px",
    color: "#607286",
    "& strong": {
      color: "#292929",
    },
    [theme.breakpoints.down("sm")]: {
      width: 176,
    },
  },
  bwtTextShort: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  bwtTextLong: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  bwtButtonMob: {
    display: "flex",
    border: "none",
    width: 20,
    height: 24,
    outline: "none",
    backgroundColor: "#D9E6EF",
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  bwtButton: {
    display: "none",
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    fontSize: 12,
    lineHeight: "14px",
    color: "#0a40b3",
    backgroundColor: "#fff",
    border: "1px solid #0a40b3",
    borderRadius: 4,
    padding: "9px 28px",
    cursor: "pointer",
    outline: 0,
    transition: ".3s",
    "&:hover": {
      backgroundColor: "#0a40b3",
      color: "#fff",
      borderColor: "#0a40b3",
    },
    "&:disabled": {
      borderColor: "#a1afbf",
      color: "#a1afbf",
      backgroundColor: "#fff",
      cursor: "auto",
    },

    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  iconESIA: {
    position: "absolute",
    top: 16,
    left: 24,
  },
}))

export default useStyles
