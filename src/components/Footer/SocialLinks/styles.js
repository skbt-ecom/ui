import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
  return {
    social: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 43,

      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },

      [theme.breakpoints.up('sm')]: {
        marginBottom: 29,
      },
    },

    link: {
      textAlign: 'center',
      marginRight: 53,

      '& svg': {
        display: 'inline-block',
        fill: theme.name === 'halva' ? '#fff' : '#a1afbf',
        width: 27,
        height: 25,
      },

      [theme.breakpoints.up('sm')]: {
        marginRight: 32,

        '& svg': {
          width: 16,
          height: 14,
        },
      },

      '&:last-of-type': {
        marginRight: 0,
      },
    },
  };
}

export default makeStyles(styles);
