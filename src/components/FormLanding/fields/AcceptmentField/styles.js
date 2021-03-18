import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => {
  const isHalva = theme.name === "halva"
  const isBlack = theme.name === "black"

  return {
    labelLabel: {
      fontWeight: 300,
      fontSize: 12,
      lineHeight: 1.3,
      padding: "9px 0",
      color: isBlack ? "#555" : "inherit",
    },

    labelRoot: {
      marginRight: 0,
    },

    helperTextRoot: {
      marginTop: -7,
    },

    checkboxRoot: {
      color: isHalva ? "rgba(0, 0, 0, 0.38) !important" : theme.palette.primary.main,
    },

    link: {
      fontWeight: "bold",
    },
  }
})

export default useStyles
