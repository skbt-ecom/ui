import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
  return {
    footer: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 400,
      background: '#fff',
      padding: '40px 8px',

      [theme.breakpoints.up('sm')]: {
        padding: '64px 24px',
      },

      '& img': {
        verticalAlign: 'middle',
      },
    },

    inner: {
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },

    phoneContainer: {
      flexGrow: 1,
      textAlign: 'center',
      marginBottom: 43,

      [theme.breakpoints.up('sm')]: {
        textAlign: 'left',
        marginBottom: 0,
      },
    },

    phoneNum: {
      fontSize: 23,
    },

    phoneHint: {
      fontSize: 10,
      letterSpacing: '0.2px',
    },

    store: {
      padding: '24px 0',

      [theme.breakpoints.down('xs')]: {
        justifyContent: 'space-between',
      },
    },

    copyright: {
      maxWidth: 272,

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
      marginBottom: 43,

      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },

      [theme.breakpoints.up('sm')]: {
        marginBottom: 29,
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

      [theme.breakpoints.up('sm')]: {
        fontSize: 12,
        paddingTop: 16,
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
  };
}

export default makeStyles(styles);
