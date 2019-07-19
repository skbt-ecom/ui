import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {},
  formLabel: {},
  group: {
    flexDirection: props => props.direction,
  },
}));

export default useStyles;
