import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    background: '#fff',
    padding: '40px 0',

    [theme.breakpoints.up('sm')]: {
      padding: '64px 0',
    },

    '& img': {
      verticalAlign: 'middle',
    },
  },

  inner: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  phone: {
    color: '#607289',
    fontSize: 23,
    fontWeight: 500,
    lineHeight: '22px',
    paddingBottom: 3,

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },

  phoneHint: {
    color: '#a1afbf',
    fontSize: 10,
    letterSpacing: 0.2,
    lineHeight: '12px',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },

  store: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },

    [theme.breakpoints.up('md')]: {
      paddingRight: 32,
    },

    '& a': {
      display: 'inline-block',

      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  },

  appstore: {
    marginRight: 8,

    [theme.breakpoints.up('md')]: {
      marginRight: 0,
      marginBottom: 8,
    },
  },

  copyright: {
    paddingBottom: 24,
    width: 296,

    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
    },

    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
    },

    '& p': {
      margin: 0,
      color: '#a1afbf',
      fontSize: 14,
      lineHeight: '20px',
      paddingBottom: 8,

      '&:last-of-type': {
        paddingBottom: 0,
      },
    },
  },

  social: {
    margin: '44px 0',

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },

    [theme.breakpoints.up('sm')]: {
      margin: '32px 0 35px',
    },

    [theme.breakpoints.up('md')]: {
      margin: '0 0 30px',
    },
  },

  icon: {
    textAlign: 'center',
    marginRight: 53,

    [theme.breakpoints.up('sm')]: {
      marginRight: 32,
    },

    '&:last-of-type': {
      marginRight: 0,
    },

    '& img': {
      [theme.breakpoints.up('sm')]: {
        maxWidth: 16,
        maxHeight: 14,
      },
    },
  },

  /**
   * Лигал
   */
  ligal: {
    color: '#a1afbf',
    fontSize: 11,
    lineHeight: '18px',
    paddingTop: 24,

    [theme.breakpoints.up('sm')]: {
      fontSize: 12,
      paddingTop: 48,
    },

    [theme.breakpoints.up('md')]: {
      fontSize: 14,
      lineHeight: '20px',
      paddingTop: 40,
    },
  },

  showMore: {
    display: 'inline-block',
    borderBottom: '1px solid #607286',
    color: '#607286',
    fontSize: 12,
    paddingTop: 8,
    lineHeight: '20px',
    cursor: 'pointer',
  },
}));

export default useStyles;
