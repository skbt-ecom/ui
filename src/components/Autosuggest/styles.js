import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  suggestionsContainer: {
    position: 'absolute',
    zIndex: 2,
    marginTop: props => (props.helperText ? -20 : 0),
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
}));

export default useStyles;
