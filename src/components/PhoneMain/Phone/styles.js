import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  phoneNum: {
    fontWeight: 500,
    fontSize: 20,
    color: '#607289',
    textDecoration: 'none',
    lineHeight: '22px',
    display: 'block',

    [theme.breakpoints.up('md')]: {
      fontSize: 23,
      lineHeight: '23px',
    },
  },
}));

export default useStyles;
