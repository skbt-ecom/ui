"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactImask = require("react-imask");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextMaskCustom = _react["default"].memo(function (props) {
  var onAccept = function onAccept(value, mask) {
    props.onAccept(value);
  };

  return _react["default"].createElement(_reactImask.IMaskInput, _extends({}, props, {
    onAccept: onAccept
  }));
}, function (prevProps, nextProps) {
  return prevProps.value === nextProps.value;
});

var MaskedField = _react["default"].memo(function (props) {
  var propsValueRaw = props.value,
      InputProps = props.InputProps;
  var propsValue = propsValueRaw && propsValueRaw.toString() || '';

  var _useState = (0, _react.useState)(propsValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(propsValue),
      _useState4 = _slicedToArray(_useState3, 2),
      mirroredValue = _useState4[0],
      setMirroredValue = _useState4[1];

  if (propsValue !== mirroredValue) {
    setValue(propsValue);
    setMirroredValue(propsValue);
  }

  var handleAccept = function handleAccept(value) {
    setValue(value);
    props.onChange(value);
  };

  var mask = props.mask,
      min = props.min,
      max = props.max,
      unmask = props.unmask,
      onChange = props.onChange,
      _props$thousandsSepar = props.thousandsSeparator,
      thousandsSeparator = _props$thousandsSepar === void 0 ? '' : _props$thousandsSepar,
      dispatch = props.dispatch,
      restProps = _objectWithoutProperties(props, ["mask", "min", "max", "unmask", "onChange", "thousandsSeparator", "dispatch"]);

  var inputProps = {
    onAccept: handleAccept,
    mask: mask,
    unmask: unmask,
    value: value,
    max: max,
    thousandsSeparator: thousandsSeparator,
    dispatch: dispatch
  };
  return _react["default"].createElement(_TextField["default"], _extends({}, restProps, {
    InputProps: {
      inputComponent: TextMaskCustom,
      inputProps: inputProps,
      classes: InputProps.classes
    }
  }));
});

MaskedField.defaultProps = {
  variant: 'outlined',
  InputProps: {}
};
var _default = MaskedField;
exports["default"] = _default;