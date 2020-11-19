import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(
  {
    verifyCodeWrapper: {
      width: 180,
      overflow: "hidden",
    },
    verifyCodeContainer: {
      left: 0,
      position: "sticky",
      marginBottom: 10,
    },
    verifyCodeInput: {
      backgroundColor: "transparent",
      paddingLeft: 14,
      letterSpacing: 27,
      border: 0,
      backgroundImage: "linear-gradient(to left, rgb(161,175,191) 70%, rgba(161,175,191, 0) 0%)",
      backgroundPosition: "bottom",
      backgroundSize: "45px 1px",
      backgroundRepeat: "repeat-x",
      backgroundPositionX: 40,
      width: 230,
      minWidth: 230,
      fontFamily: '"Roboto", Helvetica, Arial, sans-serif',
      fontSize: 32,
      fontWeight: 500,
      outline: "none",
    },
    formControlRoot: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    errorTextRoot: {
      textAlign: "center",
      marginBottom: 8,
      position: "sticky",
      left: 0,
    },
  },
  { index: 0 }
)

export default useStyles
