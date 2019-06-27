import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {},
  slider: {
    position: 'absolute',
    bottom: '-11px',
    left: 0,
  },
}));

export default useStyles;
