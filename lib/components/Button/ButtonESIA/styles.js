"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  root: {
    padding: '12px 17px',
    borderRadius: 4,
    border: '1px solid #d2dce3',
    '&:hover': {
      backgroundColor: '#f6fbfe',
      borderColor: '#f6fbfe'
    }
  },
  label: {
    textTransform: 'none',
    fontWeight: 400,
    color: function color(props) {
      return props.disabled ? '#a1afbf' : '#607286';
    }
  },
  startIcon: {
    marginRight: 18
  }
});
var _default = useStyles;
exports["default"] = _default;