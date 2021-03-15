import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => {
  const isBlack = theme.name === "black"

  return {
    fieldWrapper: {
      minHeight: 78,
      marginBottom: isBlack ? 4 : 10,
    },
    fieldWrapperAcceptment: {
      minHeight: "auto",
      marginBottom: 10,
    },
  }
})

export default useStyles
