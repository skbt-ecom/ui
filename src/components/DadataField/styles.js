import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  popper: {
    zIndex: 2,
  },
  suggestionsContainer: {
    position: 'relative',
    zIndex: 1,
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
