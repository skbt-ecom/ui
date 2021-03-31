import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles((theme) => ({
  steps: {
    background: "#F2F8FC",
    padding: "24px 24px 24px 72px",
    borderRadius: "0 0 4px 4px",

    [theme.breakpoints.up("sm")]: {
      padding: "16px 24px 16px 80px",
    },
  },

  title: {
    fontSize: 12,
    marginBottom: 24,
    width: 184,
    display: "inline-block",

    [theme.breakpoints.up("sm")]: {
      display: "none",
      width: "auto",
    },
  },

  items: {
    counterReset: "num",
  },

  item: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "16px",
    color: "#607286",
    fontSize: "12px",
    lineHeight: "14px",
    position: "relative",

    [theme.breakpoints.up("sm")]: {
      paddingBottom: "8px",
      width: "auto",
    },

    "&:before": {
      position: "absolute",
      left: -21 - 24,
      content: "counter(num)",
      counterIncrement: "num",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      fontSize: 12,
      color: "#fff",
      background: "#9FAFC1",
      marginRight: 12,
      height: 24,
      width: 24,

      [theme.breakpoints.up("sm")]: {
        position: "static",
        height: 16,
        width: 16,
        borderRadius: 8,
        fontSize: 8,
      },
    },
  },

  label: {
    width: 44,
    minWidth: 44,
    height: 24,
    marginLeft: 10,
    boxSizing: "border-box",
    background: "#73CE09",
    borderRadius: 2,
    color: "#fff",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    lineHeight: "12px",
    letterSpacing: 0.1125,
  },
}))

export default useStyles
