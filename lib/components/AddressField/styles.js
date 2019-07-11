"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _utils = require("../../utils");

var useStylesAddressDadata = (0, _styles.makeStyles)({
  container: {
    marginBottom: '45px'
  }
});
var useStylesFlatInfo = (0, _styles.makeStyles)({
  flatField: {
    marginRight: '30px'
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  }
});

var getClasses = function getClasses(props) {
  return {
    addressDadataClasses: props.classes ? useStylesAddressDadata((0, _utils.getClassesFromProps)(props, 'addressDadataClasses')) : {},
    flatInfoClasses: props.classes ? useStylesFlatInfo((0, _utils.getClassesFromProps)(props, 'flatInfoClasses')) : {}
  };
};

var _default = getClasses;
exports["default"] = _default;