import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'white',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    [theme.breakpoints.up('sm')]: {
      height: '80px',
      width: '665px',
    },
    [theme.breakpoints.up('md')]: {
      height: '104px',
      width: '1210px',
    },
  },
  logoContainer: {
    '& img': {
      height: '16px',
      [theme.breakpoints.up('sm')]: {
        height: '20px',
      },
      [theme.breakpoints.up('md')]: {
        height: '24px',
      },
    },
  },
  phoneContainer: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    fontWeight: 400,
    fontSize: '9px',
    color: '#a1afbf',
    lineHeight: '12px',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
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
