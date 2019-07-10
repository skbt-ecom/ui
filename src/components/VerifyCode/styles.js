import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
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
      fontFamily: '"Roboto", Helvetica, Arial, sans-serif',
      fontSize: '32px',
      fontWeight: '500',
      border: 0,
      borderBottom: '1px solid #a1afbf',
      width: '32px',
      marginRight: '16px',
      paddingLeft: '6px',
      boxSizing: 'border-box',
      outline: 0,
      background: props => (props.error ? 'red' : 'inherit'),
    },
  },
});

export default useStyles;
