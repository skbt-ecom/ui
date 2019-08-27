import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
  const w = 32;
  const ml = w / 2;
  const pr = 16;
  const color = '#a1afbf';

  return {
    stepper: {
      padding: 0,
      fontFamily: theme.typography.fontFamily,
      background: 'transparent',
    },

    iconContainer: {
      paddingRight: 0,
      marginRight: 8,

      '&>svg': {
        color: color,
      },

      [theme.breakpoints.up('sm')]: {
        width: w,
        height: w,
        marginRight: pr,

        '&>svg': {
          width: '100%',
          height: '100%',
        },
      },
    },

    iconContainerHorizontal: {
      [theme.breakpoints.up('sm')]: {
        width: 28,
        height: 28,
      },

      [theme.breakpoints.up('md')]: {
        width: w,
        height: w,
      },
    },

    labelVertical: {
      fontSize: 16,

      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
    },

    labelHorizontal: {
      fontSize: 16,

      [theme.breakpoints.up('sm')]: {
        fontSize: 11,
      },

      [theme.breakpoints.up('md')]: {
        fontSize: 20,
      },
    },

    contentVertical: {
      color: '#607286',
      lineHeight: 1.5,
      fontSize: 11,
      borderColor: color,

      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
        paddingLeft: w + pr - ml,
        marginLeft: ml,
      },
    },

    contentHorizontal: {
      color: '#607286',
      lineHeight: 1.5,
      fontSize: 12,

      [theme.breakpoints.up('md')]: {
        fontSize: 14,
      },
    },

    connectorVertical: {
      borderLeft: '1px solid ' + color,
      marginBottom: 8,
      minHeight: 30,
      marginLeft: 12,

      [theme.breakpoints.up('sm')]: {
        marginLeft: ml,
        minHeight: 50,
      },
    },

    connectorHorizontal: {
      // borderTop: '1px solid ' + color,
      justifyContent: 'center',
      flex: '1 1 auto',
      margin: '0 3px',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'normal',
      },
    },
  };
}

export default makeStyles(styles);
