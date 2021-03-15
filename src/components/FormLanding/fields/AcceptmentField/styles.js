import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => {
  const isHalva = theme.name === "halva"
  const isBlack = theme.name === "black"

  return {
    labelLabel: {
      fontWeight: 300,
      fontSize: isBlack ? 14 : 10,
      lineHeight: isBlack ? "20px" : 1.2,
      padding: isBlack ? 0 : "9px 0",
      color: isBlack ? "#555555" : "inherit",
      marginLeft: isBlack ? 16 : 0,
    },

    labelRoot: {
      marginRight: 0,
      marginLeft: isBlack ? 0 : -11,
      alignItems: isBlack ? "flex-start" : "center",
    },

    helperTextRoot: {
      marginTop: -7,
    },

    checkboxRoot: {
      color: isHalva ? "rgba(0, 0, 0, 0.38) !important" : theme.palette.primary.main,
      padding: isBlack ? 0 : 9,
    },

    link: {
      fontWeight: "bold",
    },
  }
})

export default useStyles
