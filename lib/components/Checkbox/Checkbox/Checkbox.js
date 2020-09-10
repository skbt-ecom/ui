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

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _styles = require("@material-ui/core/styles");

var _utils = require("../../../utils");

var useStylesCheckbox = (0, _styles.makeStyles)({
  root: {},
  checked: {}
});
var useStylesLabel = (0, _styles.makeStyles)({
  root: {
    alignItems: 'center'
  },
  label: {}
});
var useStylesHelperText = (0, _styles.makeStyles)({
  root: {}
});

var CheckboxComponent = /*#__PURE__*/_react["default"].memo(function (props) {
  var checkboxClasses = props.classes ? useStylesCheckbox((0, _utils.getClassesFromProps)(props, 'checkboxClasses')) : {};
  var labelClasses = props.classes ? useStylesLabel((0, _utils.getClassesFromProps)(props, 'labelClasses')) : {};
  var helperTextClasses = props.classes ? useStylesHelperText((0, _utils.getClassesFromProps)(props, 'helperTextClasses')) : {};
  var label = props.label,
      error = props.error,
      helperText = props.helperText,
      classes = props.classes,
      value = props.value,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["label", "error", "helperText", "classes", "value"]);

  var handleChange = function handleChange(event) {
    props.onChange(event);
  };

  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    required: true,
    error: error,
    component: "fieldset"
  }, /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], (0, _extends2["default"])({}, restProps, {
      onChange: handleChange,
      classes: {
        root: checkboxClasses.root,
        label: checkboxClasses.label
      },
      checked: value
    })),
    label: label,
    classes: {
      root: labelClasses.root,
      label: labelClasses.label
    }
  })), helperText && /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
    classes: helperTextClasses
  }, helperText));
});

var _default = CheckboxComponent;
exports["default"] = _default;