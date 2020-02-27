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