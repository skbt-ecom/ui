import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
  },
  suggestionsContainer: {
    maxHeight: '20rem',
    position: 'absolute',
    overflow: 'hidden',
  },
  suggestionsContainerOpen: {
    zIndex: 2,
    left: 0,
    right: 0,
    overflow: 'auto',
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
