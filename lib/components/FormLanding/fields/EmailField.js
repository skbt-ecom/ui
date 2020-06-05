"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _validators = require("../validators");

var EmailField = _react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], props);
});

EmailField.displayName = 'EmailField';
EmailField.defaultProps = {
  validate: _validators.emailValidator
};
var _default = EmailField;
exports["default"] = _default;