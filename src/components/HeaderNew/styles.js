import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#fff',
  },
  container: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    minHeight: '64px',

    [theme.breakpoints.up('sm')]: {
      height: '80px',
      minHeight: '80px',
    },

    [theme.breakpoints.up('md')]: {
      height: '104px',
      minHeight: '104px',
    },

    '& img': {
      verticalAlign: 'top',
    },
  },

  phoneContainer: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
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
