"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SwitchComponent = function SwitchComponent(props) {
  return _react["default"].createElement(_Switch["default"], props);
};

SwitchComponent.defaultProps = {
  color: 'primary'
};
var _default = SwitchComponent;
exports["default"] = _default;