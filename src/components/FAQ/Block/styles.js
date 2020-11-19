import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    borderLeft: 0,
    borderRight: 0,
    borderBottom: "1px solid #E1E7EC",
    "&:first-child": {
      borderTop: "1px solid #E1E7EC",
      borderRadius: 0,
    },
    "&:last-child": {
      borderRadius: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      marginBottom: 0,
      marginTop: 0,
    },
  },
  expanded: {},
})

export default useStyles
