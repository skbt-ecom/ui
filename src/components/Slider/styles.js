import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    width: '100%',
    minHeight: props => (props.withSpaceForHelperTxt ? 76 : 'auto'),
  },
  input: {
    fontWeight: 500,
    fontSize: 18,
    '& .MuiInputBase-root': {
      fontSize: 'inherit',
    },
  },
  sliderRoot: {
    position: 'absolute',
    bottom: props => (props.withSpaceForHelperTxt ? 7 : -11),
    left: 0,
    padding: '11px 0',
    '@media (pointer: coarse)': {
      bottom: props => (props.withSpaceForHelperTxt ? -2 : -20),
    },
  },
  sliderMarkLabel: {
    '&:nth-child(5)': {
      transform: 'none',
    },
    '&:nth-last-child(2)': {
      transform: 'none',
      right: '0 !important',
      left: 'auto !important',
    },
  },
}));

export default useStyles;
