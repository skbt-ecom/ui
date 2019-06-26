"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    container: {
      position: 'relative'
    },
    suggestionsContainer: {
      maxHeight: '20rem',
      position: 'absolute',
      overflow: 'hidden'
    },
    suggestionsContainerOpen: {
      zIndex: 2,
      left: 0,
      right: 0,
      overflow: 'auto'
    },
    suggestion: {
      display: 'block'
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    }
  };
});
var _default = useStyles;
exports["default"] = _default;