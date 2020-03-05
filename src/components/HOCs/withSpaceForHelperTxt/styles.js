import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: props => props.minHeight || 78,
  },
}));

export default useStyles;
