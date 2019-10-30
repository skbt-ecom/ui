"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  root: {
    paddingTop: '11px',
    paddingBottom: '11px',
    fontFamily: '"Bebas", "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '1px',
    fontSize: '20px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: function backgroundColor(props) {
        return props.color === 'secondary' ? '#EC3449' : '';
      }
    }
  },
  label: {}
});
var _default = useStyles;
exports["default"] = _default;