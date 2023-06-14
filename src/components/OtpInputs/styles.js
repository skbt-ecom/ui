import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(
  {
    inputWrapper: { width: 192, overflow: "hidden" },
    input: {
      border: "none",
      borderBottom: "1px solid #A1AFBF",
      borderRadius: "0px",
      boxSizing: "border-box",
      color: "#0b1f35",
      flexShrink: 0,
      fontSize: "32px",
      fontWeight: 500,
      height: "41px",
      margin: "0 8px",
      outline: "none",
      textAlign: "center",
      width: "32px",
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingBottom: "8px",
    },
    formControlRoot: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    errorTextRoot: {
      color: "#e15241",
      textAlign: "center",
      margin: "0 0 -32px",
      paddingTop: "16px",
      fontSize: "14px",
      fontWeight: 400,
      height: "32px",
      position: "sticky",
      left: 0,
    },
    helperText: {
      marginTop: "70px",
      fontSize: "14px",
    },
    activeInput: {
      borderColor: "#292929",
    },
    errInput: {
      color: "#e15241",
      borderColor: "#e15241",
    },
  },
  { index: 0 }
)

export default useStyles
