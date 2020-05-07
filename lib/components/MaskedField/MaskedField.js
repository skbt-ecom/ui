"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./globalThis.polyfill");

var _react = _interopRequireWildcard(require("react"));

var _reactImask = require("react-imask");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _withSpaceForHelperTxt = _interopRequireDefault(require("../HOCs/withSpaceForHelperTxt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextMaskCustom = _react["default"].memo(function (props) {
  var onAccept = function onAccept(value, mask) {
    props.onAccept(value);
  };

  return /*#__PURE__*/_react["default"].createElement(_reactImask.IMaskInput, _extends({}, props, {
    onAccept: onAccept
  }));
}, function (prevProps, nextProps) {
  return prevProps.value === nextProps.value;
});

var MaskedField = _react["default"].memo(function (props) {
  var propsValueRaw = props.value;
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

  var handleOnBlur = function handleOnBlur() {
    props.onBlur(value);
  };

  var mask = props.mask,
      min = props.min,
      max = props.max,
      unmask = props.unmask,
      onChange = props.onChange,
      onBlur = props.onBlur,
      _props$thousandsSepar = props.thousandsSeparator,
      thousandsSeparator = _props$thousandsSepar === void 0 ? '' : _props$thousandsSepar,
      dispatch = props.dispatch,
      _props$lazy = props.lazy,
      lazy = _props$lazy === void 0 ? true : _props$lazy,
      _props$placeholderCha = props.placeholderChar,
      placeholderChar = _props$placeholderCha === void 0 ? '_' : _props$placeholderCha,
      InputProps = props.InputProps,
      restProps = _objectWithoutProperties(props, ["mask", "min", "max", "unmask", "onChange", "onBlur", "thousandsSeparator", "dispatch", "lazy", "placeholderChar", "InputProps"]);

  var inputProps = {
    onAccept: handleAccept,
    mask: mask,
    unmask: unmask,
    value: value,
    max: max,
    thousandsSeparator: thousandsSeparator,
    dispatch: dispatch,
    lazy: lazy,
    placeholderChar: placeholderChar,
    onBlur: handleOnBlur
  };
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, restProps, {
    InputProps: _objectSpread(_objectSpread({}, InputProps), {}, {
      inputComponent: TextMaskCustom,
      inputProps: inputProps,
      classes: InputProps.classes
    })
  }));
});

MaskedField.defaultProps = {
  variant: 'outlined',
  mask: Date,
  InputProps: {},
  onBlur: function onBlur() {
    return null;
  }
};

var _default = (0, _withSpaceForHelperTxt["default"])(MaskedField);

exports["default"] = _default;