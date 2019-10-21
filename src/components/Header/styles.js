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
