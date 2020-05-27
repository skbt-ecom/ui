"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _withSpaceForHelperTxt = _interopRequireDefault(require("../HOCs/withSpaceForHelperTxt"));

var TextFieldComponent = function TextFieldComponent(props, ref) {
  return _react["default"].createElement(_TextField["default"], (0, _extends2["default"])({}, props, {
    ref: ref,
    variant: 'outlined'
  }));
};

var ForwardedTextFieldComponent = _react["default"].forwardRef(TextFieldComponent);

var _default = _react["default"].memo((0, _withSpaceForHelperTxt["default"])(ForwardedTextFieldComponent));

exports["default"] = _default;