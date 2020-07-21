import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
  const isHalva = theme.name === 'halva';
  const color = isHalva ? '#fff' : '#a1afbf';

  return {
    footer: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 400,
      background: isHalva
        ? 'linear-gradient(180deg, #fb795b, #ef4c58)'
        : '#fff',
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
      color,
      flexGrow: 1,
      textAlign: 'center',
      marginBottom: 43,

      [theme.breakpoints.up('sm')]: {
        textAlign: 'left',
        marginBottom: 0,
      },
    },

    phoneNum: {
      color: isHalva ? '#fff' : '#607289',
      fontSize: 23,
      lineHeight: '23px',
    },

    phoneMultiple: {
      fontSize: 23,
      lineHeight: '23px',
      marginBottom: 8,
    },

    phoneHint: {
      fontSize: 10,
      letterSpacing: '0.2px',
      margin: 0,
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
        color,
        fontSize: 14,
        lineHeight: '20px',
        paddingBottom: 8,

        '&:last-of-type': {
          paddingBottom: 0,
        },
      },
    },

    /**
     * Лигал
     */
    ligal: {
      color,
      fontSize: 11,
      lineHeight: '18px',

      [theme.breakpoints.up('sm')]: {
        fontSize: 12,
        paddingTop: 16,
      },
    },

    showMore: {
      display: 'inline-block',
      borderBottom: '1px solid ' + (isHalva ? '#fff' : '#607286'),
      color: isHalva ? '#fff' : '#607286',
      fontSize: 12,
      paddingTop: 8,
      lineHeight: '20px',
      cursor: 'pointer',
    },
  };
}

export default makeStyles(styles);
