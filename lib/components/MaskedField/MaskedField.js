"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

require("./globalThis.polyfill");

var _react = _interopRequireWildcard(require("react"));

var _reactImask = require("react-imask");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _withSpaceForHelperTxt = _interopRequireDefault(require("../HOCs/withSpaceForHelperTxt"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var TextMaskCustom = _react["default"].memo(function (props) {
  var onAccept = function onAccept(value, mask) {
    props.onAccept(value);
  };

  return /*#__PURE__*/_react["default"].createElement(_reactImask.IMaskInput, (0, _extends2["default"])({}, props, {
    onAccept: onAccept
  }));
}, function (prevProps, nextProps) {
  return prevProps.value === nextProps.value;
});

var MaskedField = _react["default"].memo(function (props) {
  var propsValueRaw = props.value;
  var propsValue = propsValueRaw && propsValueRaw.toString() || '';

  var _useState = (0, _react.useState)(propsValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(propsValue),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
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
      restProps = (0, _objectWithoutProperties2["default"])(props, ["mask", "min", "max", "unmask", "onChange", "onBlur", "thousandsSeparator", "dispatch", "lazy", "placeholderChar", "InputProps"]);
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
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({}, restProps, {
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