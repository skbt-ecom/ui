"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var SwitchComponent = _react["default"].memo(function (_ref) {
  var label = _ref.label,
      error = _ref.error,
      helperText = _ref.helperText,
      checked = _ref.checked,
      value = _ref.value,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["label", "error", "helperText", "checked", "value"]);
  return _react["default"].createElement(_FormGroup["default"], {
    row: true
  }, _react["default"].createElement(_FormControlLabel["default"], {
    control: _react["default"].createElement(_Switch["default"], (0, _extends2["default"])({}, props, {
      checked: value
    })),
    label: label
  }));
});

SwitchComponent.defaultProps = {
  color: 'primary'
};
var _default = SwitchComponent;
exports["default"] = _default;