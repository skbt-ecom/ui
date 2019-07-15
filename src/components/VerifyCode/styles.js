import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  codeInput: {
    '& input[type="number"]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type="number"]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type="number"]': {
      '-moz-appearance': 'textfield',
    },
    '& input': {
      fontFamily: theme.typography.fontFamily,
      fontSize: '32px',
      fontWeight: '500',
      border: 0,
      borderBottom: '1px solid #a1afbf',
      width: '32px',
      marginRight: '16px',
      paddingLeft: '6px',
      boxSizing: 'border-box',
      outline: 0,
    },
  },
  errorMsg: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    textAlign: 'center',
  },
}));

export default useStyles;
