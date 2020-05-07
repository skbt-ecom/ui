"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _styles = require("@material-ui/core/styles");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStylesCheckbox = (0, _styles.makeStyles)({
  root: {},
  checked: {}
});
var useStylesLabel = (0, _styles.makeStyles)({
  root: {
    alignItems: 'flex-start'
  },
  label: {
    paddingTop: 12
  }
});
var useStylesHelperText = (0, _styles.makeStyles)({
  root: {}
});

var CheckboxComponent = _react["default"].memo(function (props) {
  var checkboxClasses = props.classes ? useStylesCheckbox((0, _utils.getClassesFromProps)(props, 'checkboxClasses')) : {};
  var labelClasses = props.classes ? useStylesLabel((0, _utils.getClassesFromProps)(props, 'labelClasses')) : {};
  var helperTextClasses = props.classes ? useStylesHelperText((0, _utils.getClassesFromProps)(props, 'helperTextClasses')) : {};

  var label = props.label,
      error = props.error,
      helperText = props.helperText,
      classes = props.classes,
      value = props.value,
      restProps = _objectWithoutProperties(props, ["label", "error", "helperText", "classes", "value"]);

  var handleChange = function handleChange(event) {
    props.onChange(event);
  };

  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    required: true,
    error: error,
    component: "fieldset"
  }, /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], _extends({}, restProps, {
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