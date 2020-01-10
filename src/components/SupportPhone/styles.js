import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  phoneContainer: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    color: '#a1afbf',
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
    fontSize: 9,
    fontWeight: 400,
    lineHeight: '12px',
    letterSpacing: '0.05px',

    [theme.breakpoints.up('md')]: {
      letterSpacing: '0.2px',
      fontSize: 10,
    },
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
