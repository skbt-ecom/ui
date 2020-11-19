import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  withSpaceForHelperTxt: {
    minHeight: props => props.minHeight || 78,
  },
  root: {},
}))

export default useStyles
