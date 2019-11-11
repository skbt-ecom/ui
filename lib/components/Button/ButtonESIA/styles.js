"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  container: {
    display: 'inline-block',
    width: function width(props) {
      return props.fullWidth ? '100%' : 'auto';
    }
  },
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
  },
  descrBlock: {
    display: 'flex',
    marginTop: 16
  },
  descrText: {
    fontSize: 10,
    lineHeight: '12px',
    fontWeight: 300,
    color: '#607286',
    flexBasis: 208,
    margin: 0
  },
  secureIcon: {
    paddingTop: 4,
    paddingLeft: 16,
    paddingRight: 24
  }
});
var _default = useStyles;
exports["default"] = _default;