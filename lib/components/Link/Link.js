"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _styles = _interopRequireDefault(require("./styles"));

var LinkComponent = /*#__PURE__*/_react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);
  return /*#__PURE__*/_react["default"].createElement(_Link["default"], (0, _extends2["default"])({}, props, {
    classes: {
      root: classes.root,
      button: classes.button
    }
  }));
});

var _default = LinkComponent;
exports["default"] = _default;