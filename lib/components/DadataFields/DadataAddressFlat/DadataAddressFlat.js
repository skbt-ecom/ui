"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DadataAddress = _interopRequireDefault(require("../../DadataFields/DadataAddress"));

var _TextField = _interopRequireDefault(require("../../TextField"));

var _Checkbox = _interopRequireDefault(require("../../Checkbox/Checkbox"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var parseIncomingValue = function parseIncomingValue(regexp, incomingValue) {
  var match = regexp.exec(incomingValue);
  return match;
};

var dadataOptions = {
  to_bound: {
    value: 'house'
  }
};

var DadataAddressFlat = _react["default"].memo(function (_ref) {
  var regexp = _ref.regexp,
      incomingValue = _ref.incomingValue,
      onBlur = _ref.onBlur,
      props = _objectWithoutProperties(_ref, ["regexp", "incomingValue", "onBlur"]);

  var addressDadataClasses = (0, _styles.useStylesAddressDadata)(props.classes.addressDadataClasses);
  var flatInfoClasses = (0, _styles.useStylesFlatInfo)(props.classes.flatInfoClasses);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      dadataAddressData = _useState2[0],
      setDadataAddressData = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      flat = _useState4[0],
      setFlat = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isNoFlat = _useState6[0],
      setIsNoFlat = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      incomingValueWOFlat = _useState8[0],
      setIncomingValueWOFlat = _useState8[1];

  (0, _react.useEffect)(function () {
    if (incomingValue) {
      var parsedIncomingValue = parseIncomingValue(regexp, incomingValue);

      var _parsedIncomingValue = _slicedToArray(parsedIncomingValue, 3),
          addressWOFlat = _parsedIncomingValue[1],
          _flat = _parsedIncomingValue[2];

      setIncomingValueWOFlat(addressWOFlat);

      if (_flat) {
        setFlat(_flat);
      }
    }
  }, [regexp, incomingValue]);
  (0, _react.useEffect)(function () {
    if (dadataAddressData) {
      onBlur(null, _objectSpread({}, dadataAddressData, {
        dadataValue: _objectSpread({}, dadataAddressData.dadataValue, {
          inputFlat: flat,
          isNoFlat: isNoFlat
        })
      }));
    }
  }, [flat, isNoFlat, dadataAddressData, onBlur]);
  var handleAddressDadataBlur = (0, _react.useCallback)(function (e, values) {
    setDadataAddressData(values);
  }, []);
  var addressDadataErrorProps = {
    error: props.error ? Boolean(props.error.addressDadata) : false,
    helperText: props.helperText.addressDadata
  };
  var flatErrorProps = {
    error: props.error ? Boolean(props.error.flat) : false,
    helperText: props.helperText.flat
  };
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: addressDadataClasses.container
  }, _react["default"].createElement(_DadataAddress["default"], _extends({
    onBlur: handleAddressDadataBlur,
    type: 'address',
    label: 'Адрес',
    dadataOptions: dadataOptions,
    incomingValue: incomingValueWOFlat,
    fullWidth: true
  }, addressDadataErrorProps))), _react["default"].createElement("div", {
    className: flatInfoClasses.container
  }, _react["default"].createElement(_TextField["default"], _extends({
    label: 'Квартира',
    onChange: function onChange(e) {
      return setFlat(e.target.value);
    },
    value: flat,
    disabled: isNoFlat,
    classes: {
      root: flatInfoClasses.flatField
    }
  }, flatErrorProps)), _react["default"].createElement(_Checkbox["default"], {
    onChange: function onChange(e) {
      return setIsNoFlat(e.target.checked);
    },
    label: 'Нет номера квартиры',
    color: 'primary',
    checked: isNoFlat,
    classes: {
      labelClasses: {
        root: flatInfoClasses.checkbox
      }
    }
  })));
});

DadataAddressFlat.defaultProps = {
  helperText: {
    addressDadata: null,
    flat: null
  },
  classes: {
    addressDadataClasses: {},
    flatInfoClasses: {}
  },
  regexp: /(.*?)\s*кв (\d+(?:[/-]\d+)?)?$/
};
var _default = DadataAddressFlat;
exports["default"] = _default;