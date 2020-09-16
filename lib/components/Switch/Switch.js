"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = SwitchComponent;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

function SwitchComponent(props) {
  var label = props.label,
      classes = props.classes,
      error = props.error,
      helperText = props.helperText,
      checked = props.checked,
      value = props.value,
      switchProps = (0, _objectWithoutProperties2["default"])(props, ["label", "classes", "error", "helperText", "checked", "value"]);
  return /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], {
    row: true
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], (0, _extends2["default"])({}, switchProps, {
      checked: value
    })),
    label: label,
    classes: {
      label: classes.label
    }
  }));
}

SwitchComponent.defaultProps = {
  color: 'primary',
  classes: {}
};