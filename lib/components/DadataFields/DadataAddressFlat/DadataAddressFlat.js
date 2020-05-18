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

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _flat2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/flat"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _DadataAddress = _interopRequireDefault(require("../../DadataFields/DadataAddress"));

var _TextField = _interopRequireDefault(require("../../TextField"));

var _Checkbox = _interopRequireDefault(require("../../Checkbox/Checkbox"));

var _styles = require("./styles");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, ["regexp", "incomingValue", "onBlur"]);
  var addressDadataClasses = (0, _styles.useStylesAddressDadata)(props.classes.addressDadataClasses);
  var flatInfoClasses = (0, _styles.useStylesFlatInfo)(props.classes.flatInfoClasses);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      dadataAddressData = _useState2[0],
      setDadataAddressData = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      flat = _useState4[0],
      setFlat = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isNoFlat = _useState6[0],
      setIsNoFlat = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      incomingValueWOFlat = _useState8[0],
      setIncomingValueWOFlat = _useState8[1];

  (0, _react.useEffect)(function () {
    if (incomingValue) {
      var parsedIncomingValue = parseIncomingValue(regexp, incomingValue);

      var _parsedIncomingValue = (0, _slicedToArray2["default"])(parsedIncomingValue, 3),
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
    error: props.error ? Boolean((0, _flat2["default"])(props.error)) : false,
    helperText: (0, _flat2["default"])(props.helperText)
  };
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: addressDadataClasses.container
  }, _react["default"].createElement(_DadataAddress["default"], (0, _extends2["default"])({
    onBlur: handleAddressDadataBlur,
    type: 'address',
    label: 'Адрес',
    dadataOptions: dadataOptions,
    incomingValue: incomingValueWOFlat,
    fullWidth: true
  }, addressDadataErrorProps))), _react["default"].createElement("div", {
    className: flatInfoClasses.container
  }, _react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
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