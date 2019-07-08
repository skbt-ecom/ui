"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  verifyCodeWrapper: {
    width: '180px',
    overflow: 'hidden'
  },
  verifyCodeContainer: {
    left: 0,
    position: 'sticky'
  },
  verifyCodeInput: {
    paddingLeft: '14px',
    letterSpacing: '27px',
    border: '0',
    backgroundImage: 'linear-gradient(to left, rgb(161,175,191) 70%, rgba(161,175,191, 0) 0%)',
    backgroundPosition: 'bottom',
    backgroundSize: '45px 1px',
    backgroundRepeat: 'repeat-x',
    backgroundPositionX: '40px',
    width: '230px',
    minWidth: '230px',
    fontFamily: '"Roboto", Helvetica, Arial, sans-serif',
    fontSize: '32px',
    fontWeight: '500',
    outline: 'none'
  }
});
var _default = useStyles;
exports["default"] = _default;