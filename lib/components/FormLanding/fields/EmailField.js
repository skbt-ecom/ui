"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _validators = require("../validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EmailField = _react["default"].memo(function (props) {
  return _react["default"].createElement(_TextField["default"], props);
});

EmailField.displayName = 'EmailField';
EmailField.defaultProps = {
  validate: _validators.emailValidator
};
var _default = EmailField;
exports["default"] = _default;