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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } else { ownKeys(arguments[i]).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(arguments[i], key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getClassesFromProps = function getClassesFromProps(props, className) {
  var classes = props.classes[className],
      restProps = _objectWithoutProperties(props, ["classes"]);

  return _objectSpread({
    classes: classes
  }, restProps);
};

var useStylesCheckbox = (0, _styles.makeStyles)({
  root: {},
  checked: {}
});
var useStylesLabel = (0, _styles.makeStyles)({
  root: {},
  label: {}
});

var CheckboxComponent = _react["default"].memo(function (props) {
  var checkboxClasses = props.classes ? useStylesCheckbox(getClassesFromProps(props, 'checkboxClasses')) : {};
  var labelClasses = props.classes ? useStylesLabel(getClassesFromProps(props, 'labelClasses')) : {};

  var label = props.label,
      error = props.error,
      helperText = props.helperText,
      classes = props.classes,
      restProps = _objectWithoutProperties(props, ["label", "error", "helperText", "classes"]);

  var handleChange = function handleChange(event) {
    props.onChange(event);
  };

  return _react["default"].createElement(_FormControl["default"], {
    required: true,
    error: error,
    component: "fieldset"
  }, _react["default"].createElement(_FormGroup["default"], null, _react["default"].createElement(_FormControlLabel["default"], {
    control: _react["default"].createElement(_Checkbox["default"], _extends({}, restProps, {
      onChange: handleChange,
      classes: {
        root: checkboxClasses.root,
        label: checkboxClasses.label
      }
    })),
    label: label,
    classes: {
      root: labelClasses.root,
      label: labelClasses.label
    }
  })), helperText && _react["default"].createElement(_FormHelperText["default"], null, helperText));
});

var _default = CheckboxComponent;
exports["default"] = _default;