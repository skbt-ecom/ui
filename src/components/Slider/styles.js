import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    width: "100%",
  },
  sliderRoot: {
    position: "absolute",
    left: 0,
    bottom: -1,
    padding: 0,
    // '@media (pointer: coarse)': {
    //   bottom: props => (props.withSpaceForHelperTxt ? -2 : -20),
    // },
  },
  sliderMarkLabel: {
    "&:nth-child(5)": {
      transform: "none",
    },
    "&:nth-last-child(2)": {
      transform: "none",
      right: "0 !important",
      left: "auto !important",
    },
  },
}))

export default useStyles
