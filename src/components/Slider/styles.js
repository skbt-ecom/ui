import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    fontWeight: 500,
    fontSize: '18px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderWidth: props => (props.discrete ? '0' : '1px'),
      },
    },
    '& .MuiInputBase-root': {
      fontSize: 'inherit',
    },
  },
  sliderRoot: {
    position: 'absolute',
    bottom: props => (props.discrete ? '-31px' : '-11px'),
    left: 0,
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
  sliderMark: {
    visibility: props => (props.discrete ? 'hidden' : 'visible'),
  },
}));

export default useStyles;
