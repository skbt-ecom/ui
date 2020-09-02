import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
  return {
    social: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 43,

      [theme.breakpoints.up('sm')]: {
        marginBottom: 29,
        paddingRight: props => props.paddingRight,
      },
    },

    link: {
      textAlign: 'center',

      '& svg': {
        display: 'inline-block',
        fill: theme.name === 'halva' ? '#979797' : '#a1afbf',
        width: 27,
        height: 25,
      },

      [theme.breakpoints.up('sm')]: {
        '& svg': {
          width: 16,
          height: 14,
        },
      },
    },
  };
}

export default makeStyles(styles);
