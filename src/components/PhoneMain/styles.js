import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  phoneContainer: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    color: '#a1afbf',
  },
  phoneMultiple: {
    marginBottom: 4,
    fontSize: 16,
    lineHeight: '16px',

    [theme.breakpoints.up('md')]: {
      fontSize: 20,
      lineHeight: '20px',
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
