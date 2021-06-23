import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  phoneNum: {
    fontWeight: 500,
    fontSize: 22,
    color: theme.palette.custom.grey600,
    textDecoration: "none",
    lineHeight: 1,
    display: "block",
  },
}))

export default useStyles
