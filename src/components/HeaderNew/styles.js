import { makeStyles } from '@material-ui/core/styles';

export const useHeaderStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      position: 'static',
    },
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
}));

export const usePhoneStyles = makeStyles(theme => ({
  phoneContainer: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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

  phoneNum: {
    fontWeight: 500,
    fontSize: 20,
    color: '#607289',
    textDecoration: 'none',
    lineHeight: '22px',
    display: 'block',

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
}));

export const useButtonStyles = makeStyles(theme => ({
  root: {
    padding: '8px 20px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  label: {
    fontSize: 16,
    lineHeight: '20px',
  },
}));

// export default useStyles;
