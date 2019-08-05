import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'white',
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

  logo: {
    height: '16px',

    [theme.breakpoints.up('sm')]: {
      height: '20px',
    },

    [theme.breakpoints.up('md')]: {
      height: '24px',
    },
  },

  withHalva: {
    [theme.breakpoints.down('xs')]: {
      width: 26,
      overflow: 'hidden',

      '& $logo': {
        height: 24,
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

  halvaLogo: {
    width: 62,

    [theme.breakpoints.up('sm')]: {
      width: 81,
    },

    [theme.breakpoints.up('md')]: {
      width: 93,
    },
  },
}));

export default useStyles;
