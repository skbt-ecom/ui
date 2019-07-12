import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
  const w = 32;
  const ml = w / 2;
  const pr = 16;
  const color = '#a1afbf';

  return {
    stepper: {
      padding: 0,
    },

    iconContainer: {
      '&>svg': {
        color: color,
      },

      [theme.breakpoints.up('sm')]: {
        width: w,
        height: w,
        paddingRight: pr,

        '&>svg': {
          width: '100%',
          height: '100%',
        },
      },
    },

    label: {
      fontSize: 16,

      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
    },

    content: {
      color: '#607286',
      lineHeight: 1.5,
      fontFamily: theme.typography.fontFamily,
      fontSize: 11,
      borderColor: color,

      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
        paddingLeft: w + pr - ml,
        marginLeft: ml,
      },
    },

    connector: {
      borderLeft: '1px solid ' + color,
      marginBottom: 8,
      minHeight: 24,
      marginLeft: 12,

      [theme.breakpoints.up('sm')]: {
        marginLeft: ml,
      },
    },
  };
}

export default makeStyles(styles);
