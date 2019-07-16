import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  verifyCodeWrapper: {
    width: '180px',
    overflow: 'hidden',
  },
  verifyCodeContainer: {
    left: 0,
    position: 'sticky',
    marginBottom: '10px',
  },
  verifyCodeInput: {
    paddingLeft: '14px',
    letterSpacing: '27px',
    border: '0',
    backgroundImage:
      'linear-gradient(to left, rgb(161,175,191) 70%, rgba(161,175,191, 0) 0%)',
    backgroundPosition: 'bottom',
    backgroundSize: '45px 1px',
    backgroundRepeat: 'repeat-x',
    backgroundPositionX: '40px',
    width: '230px',
    minWidth: '230px',
    fontFamily: '"Roboto", Helvetica, Arial, sans-serif',
    fontSize: '32px',
    fontWeight: '500',
    outline: 'none',
  },
  errorMsg: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    textAlign: 'center',
    margin: 0,
    position: 'sticky',
    left: 0,
  },
}));

export default useStyles;
