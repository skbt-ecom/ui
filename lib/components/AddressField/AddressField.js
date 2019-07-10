"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DadataField = _interopRequireDefault(require("../DadataField"));

var _TextField = _interopRequireDefault(require("../TextField"));

var _Checkbox = _interopRequireDefault(require("../Chekbox/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addFlatToDadata = function addFlatToDadata(dadataValue, flat) {
  return _objectSpread({}, dadataValue, {
    data: _objectSpread({}, dadataValue.data, {
      flat: flat
    })
  });
}; //TODO: use useCallback hook on handleSmth functions


var AddressField = _react["default"].memo(function (props) {
  // console.log('AddressField rerendered');
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      addressDadata = _useState2[0],
      setAddressDadata = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      flat = _useState4[0],
      setFlat = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isNoFlat = _useState6[0],
      setIsNoFlat = _useState6[1];

  var isFirstRun = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    } // console.log('');
    // console.log('===useEffect START===');
    // console.log({ addressDadata, flat, isNoFlat });
    // console.log('===useEffect END===');
    // console.log('');


    if (!addressDadata || isNoFlat) {
      return props.onChange(addressDadata);
    }

    var sendData = addFlatToDadata(addressDadata, flat); // console.log('sendData', sendData);

    props.onChange(sendData);
  }, [addressDadata, flat, isNoFlat]);
  var handleAddressDadataChange = (0, _react.useCallback)(function (value) {
    // console.log('handleAddressDadataChange val:', value);
    setAddressDadata(value);
  }, []);
  var handleFlatChange = (0, _react.useCallback)(function (e) {
    var value = e.target.value;
    setFlat(value); // console.log('handleFlatChange val:', value);
  }, []);
  var handleNoFlatChange = (0, _react.useCallback)(function (e) {
    var checked = e.target.checked;
    setIsNoFlat(checked); // console.log('handleNoFlatChange val:', checked);
  }, []);
  var addressDadataErrorProps = {
    error: Boolean(props.helperText.addressDadata),
    helperText: props.helperText.addressDadata
  };
  var flatErrorProps = {
    error: Boolean(props.helperText.flat),
    helperText: props.helperText.flat
  };
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DadataField["default"], _extends({
    onChange: handleAddressDadataChange,
    type: 'address',
    label: 'Адрес',
    dadataOptions: {
      to_bound: {
        value: 'house'
      }
    },
    fullWidth: true
  }, addressDadataErrorProps)), _react["default"].createElement(_TextField["default"], _extends({
    onChange: handleFlatChange,
    value: flat,
    disabled: isNoFlat
  }, flatErrorProps)), _react["default"].createElement(_Checkbox["default"], {
    onChange: handleNoFlatChange,
    label: 'Нет номера квартиры',
    color: 'primary',
    checked: isNoFlat
  }));
});

AddressField.defaultProps = {
  helperText: {
    addressDadata: null,
    flat: null
  }
};
var _default = AddressField;
exports["default"] = _default;