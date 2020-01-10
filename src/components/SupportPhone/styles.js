import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  phoneContainer: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    fontWeight: 400,
    fontSize: 9,
    color: '#a1afbf',
    lineHeight: '12px',
  },

  phoneNum: {
    fontWeight: 500,
    fontSize: 20,
    color: '#607289',
    textDecoration: 'none',
    lineHeight: '22px',
    [theme.breakpoints.up('md')]: {
      fontSize: 23,
    },
  },

  phoneHint: {
    margin: 0,
    fontWeight: 400,
  },

  buttonRoot: {
    padding: '8px 20px',

    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  buttonLabel: {
    fontSize: 16,
    lineHeight: '20px',
  },
}));

export default useStyles;
