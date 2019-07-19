import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
  return {
    fail: {
      '& $uploader': {
        borderColor: theme.palette.secondary.main,
      },

      '& $icon': {
        fill: theme.palette.secondary.main,
      },

      '& $hint': {
        color: theme.palette.secondary.main,
      },
    },

    uploader: {
      position: 'relative',
      borderRadius: 4,
      border: '1px dashed #d2dce3',
      background: '#f9fafc',
      cursor: 'pointer',
      transition: '0.3s border-color',
      width: 128,
      height: 88,
      marginBottom: 8,

      [theme.breakpoints.up('sm')]: {
        width: 153,
        height: 104,
        marginBottom: 16,
      },

      [theme.breakpoints.up('md')]: {
        width: 176,
        height: 120,
      },

      '&:hover, &$active': {
        borderColor: '#607286',

        '& $icon': {
          fill: '#607286',
        },
      },
    },

    active: {},

    icon: {
      fill: '#a1afbf',
      transition: '0.3s fill',
    },

    linearProgress: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      left: -1,
      borderRadius: '0 0 4px 4px',
      backgroundColor: '#bfcee5',
      height: 6,

      [theme.breakpoints.up('sm')]: {
        height: 8,
      },
    },

    imgOut: {
      maxWidth: '100%',
    },

    input: {
      display: 'none',
    },

    hint: {
      fontSize: 10,
      lineHeight: '22px',

      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
      },

      [theme.breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
  };
}

export default makeStyles(styles);
