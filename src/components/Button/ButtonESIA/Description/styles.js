import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "24px 20px 40px 32px",

    [theme.breakpoints.up("sm")]: {
      padding: "32px 24px 48px 32px",
    },
  },

  icon: {
    paddingTop: 5,
    paddingRight: 16,

    [theme.breakpoints.up("sm")]: {
      paddingRight: 24,
    },
  },

  text: {
    fontSize: 14,
    lineHeight: 1.35,
  },

  title: {
    color: "#292929",
    fontWeight: 500,
    marginBottom: 8,
  },

  hint: {
    color: "#607286",
  },
}))

export default useStyles
