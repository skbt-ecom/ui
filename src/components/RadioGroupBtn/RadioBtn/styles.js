import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  label: {
    marginRight: '8px',
    [theme.breakpoints.up('md')]: {
      marginRight: '28px',
    },
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  input: {
    display: 'none',
    '&:checked': {
      '& + div': {
        backgroundColor: theme.palette.primary.main,
        '& span': {
          color: '#fff',
          '&:before': {
            opacity: 1,
          },
        },
      },
    },
  },
  box: {
    width: '48px',
    height: '48px',
    border: '1px solid #d2dce3',
    borderRadius: '4px',
    transition: 'all 250ms ease',
    willChange: 'transition',
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '15px',
    [theme.breakpoints.up('sm')]: {
      width: '56px',
    },
    [theme.breakpoints.up('md')]: {
      width: '64px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '112px',
    },
    '& span': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: 0,
      right: 0,
      transition: 'all 300ms ease',
      userSelect: 'none',
      fontFamily: theme.typography.fontFamily,
      fontSize: '8px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '10px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
    },
  },
}));

export default useStyles;
