import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  phoneContainer: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    color: '#a1afbf',
  },
  phoneMultiple: {},

  phoneHint: {},

  phoneNum: {},

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
