"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextFieldComponent = _react["default"].memo(function (props) {
  return _react["default"].createElement(_TextField["default"], props);
});

TextFieldComponent.defaultProps = {
  variant: 'outlined'
};
var _default = TextFieldComponent;
exports["default"] = _default;