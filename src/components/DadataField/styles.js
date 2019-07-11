import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  loading: {
    position: 'absolute',
    zIndex: 2,
    background: 'rgba(0,0,0,.5)',
    width: '100%',
    height: '100%',
  },
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
  '@keyframes rotateCenter': {
    from: {
      transform: 'rotate(0)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  loadingIcon: {
    animationName: '$rotateCenter',
    animationDuration: '2s',
    animationPlayState: 'linear',
    animationIterationCount: 'infinite',
  },
}));

export default useStyles;
