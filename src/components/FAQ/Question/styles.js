import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    padding: 0,
    minHeight: 24,
    "&$expanded": {
      minHeight: 24,
    },
  },
  content: {
    margin: "30px 0",
    "&$expanded": {
      margin: "30px 0 24px",
    },
  },
  expanded: {},
  expandIcon: {
    padding: "0 3px",
    marginRight: -7,
  },
  text: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "20px",
    padding: 0,
    margin: 0,
  },
})

export default useStyles
