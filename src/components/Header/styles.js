import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'white',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '64px',
    },
    [theme.breakpoints.up('md')]: {
      height: '80px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '104px',
    },
  },
  logoContainer: {},
  phoneContainer: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    fontWeight: 400,
    fontSize: '9px',
    color: '#a1afbf',
    lineHeight: '12px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  phoneNum: {
    fontWeight: 500,
    fontSize: '20px',
    color: '#607289',
    textDecoration: 'none',
    lineHeight: '22px',
  },
  phoneHint: {
    margin: 0,
  },
}));

export default useStyles;
