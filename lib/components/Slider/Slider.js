"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Slider = _interopRequireDefault(require("@material-ui/core/Slider"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SliderComponent = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var _useState = (0, _react.useState)(props.initialValue || props.value || props.min),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleSliderChange = function handleSliderChange(_event, newValue) {
    if (value === newValue) {
      return;
    }

    setValue(newValue);
    props.onChange(newValue);
  };

  var handleSliderChangeCommitted = function handleSliderChangeCommitted(_event, newValue) {
    if (props.onChangeCommitted) {
      setValue(newValue);
      props.onChangeCommitted(newValue);
    }
  };

  var handleInputChange = function handleInputChange(_ref) {
    var _ref$floatValue = _ref.floatValue,
        floatValue = _ref$floatValue === void 0 ? 0 : _ref$floatValue;

    if (floatValue !== value) {
      setValue(floatValue);

      if (props.onChangeCommitted) {
        return props.onChangeCommitted(floatValue);
      }

      props.onChange(floatValue);
    }
  };

  var handleInputBlur = function handleInputBlur(e) {
    var min = props.min,
        max = props.max;
    var newValue = 0;

    if (value <= min) {
      newValue = min;
    } else if (value >= max) {
      newValue = max;
    }

    if (newValue) {
      setValue(newValue);

      if (props.onChangeCommitted) {
        return props.onChangeCommitted(newValue);
      }

      props.onChange(newValue);
    }
  };

  var sliderProps = props.sliderProps,
      inputProps = props.inputProps,
      label = props.label,
      min = props.min,
      max = props.max;
  return _react["default"].createElement("div", {
    className: classes.container
  }, _react["default"].createElement(_reactNumberFormat["default"], _extends({}, inputProps, {
    label: label,
    className: classes.input,
    customInput: _TextField["default"],
    thousandSeparator: ' ',
    value: value,
    onValueChange: handleInputChange,
    fullWidth: true,
    allowNegative: false,
    decimalScale: 0,
    onBlur: handleInputBlur
  })), _react["default"].createElement(_Slider["default"], _extends({}, sliderProps, {
    classes: {
      root: classes.sliderRoot,
      markLabel: classes.sliderMarkLabel,
      mark: classes.sliderMark
    },
    value: value,
    onChange: handleSliderChange,
    onChangeCommitted: handleSliderChangeCommitted,
    min: min,
    max: max
  })));
});

SliderComponent.defaultProps = {
  onChange: function onChange() {
    return null;
  },
  withSpaceForHelperTxt: false
};
var _default = SliderComponent;
exports["default"] = _default;