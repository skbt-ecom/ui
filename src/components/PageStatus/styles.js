import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
  return {
    root: {
      textAlign: 'left',
      boxSizing: 'border-box',
      boxShadow: '0 10px 34px rgba(0, 0, 0, 0.2)',
      borderRadius: 8,
      backgroundColor: '#fff',
      minHeight: 304,
      padding: '36px 32px',

      [theme.breakpoints.up('sm')]: {
        margin: '0 auto',
        maxWidth: 400,
      },

      [theme.breakpoints.up('md')]: {
        maxWidth: 528,
        minHeight: 336,
        padding: '44px 42px',
      },
    },

    head: {
      paddingRight: 15,
      color: '#000',
      fontWeight: 700,
      letterSpacing: 0.5,
      fontSize: 24,
      lineHeight: '29px',

      [theme.breakpoints.up('md')]: {
        fontSize: 32,
        lineHeight: '39px',
      },
    },

    icon: {
      verticalAlign: 'top',
      width: 41,

      [theme.breakpoints.up('md')]: {
        width: 47,
      },
    },

    title: {
      color: '#000',
      fontSize: 16,
      lineHeight: '24px',
      padding: '38px 0 18px',
    },

    description: {
      color: '#607289',
      fontSize: 14,
      lineHeight: '21px',
      maxWidth: 265,

      '& > .errorMsg': {
        margin: 0,
        paddingLeft: 15,
        listStyleType: 'disc',
      },

      '& > .errorHint': {
        fontSize: 11,
        lineHeight: '18px',
        paddingTop: 15,

        [theme.breakpoints.up('md')]: {
          paddingTop: 24,
        },
      },
    },
  };
}

export default makeStyles(styles);
