import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  logo: {
    height: '16px',

    [theme.breakpoints.up('sm')]: {
      height: '20px',
    },

    [theme.breakpoints.up('md')]: {
      height: '24px',
    },
  },
}));

export default useStyles;
