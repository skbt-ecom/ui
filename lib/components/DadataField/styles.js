"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      position: 'relative'
    },
    loading: {
      position: 'absolute',
      zIndex: 2,
      background: 'rgba(0,0,0,.5)',
      width: '100%',
      height: '100%'
    },
    suggestionsContainer: {
      position: 'absolute',
      zIndex: 2,
      marginTop: function marginTop(props) {
        return props.helperText ? -20 : 0;
      },
      left: 0,
      right: 0
    },
    suggestion: {
      display: 'block',
      '& > div ': {
        whiteSpace: 'normal'
      }
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    },
    '@keyframes rotateCenter': {
      from: {
        transform: 'rotate(0)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    },
    loadingIcon: {
      animationName: '$rotateCenter',
      animationDuration: '2s',
      animationPlayState: 'linear',
      animationIterationCount: 'infinite'
    }
  };
});
var _default = useStyles;
exports["default"] = _default;