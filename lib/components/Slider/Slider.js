"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Slider = _interopRequireDefault(require("@material-ui/core/Slider"));

var _TextField = _interopRequireDefault(require("../TextField"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SliderComponent = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var _useState = (0, _react.useState)(props.initialValue || props.value || props.min),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var limit = function limit(_ref) {
    var floatValue = _ref.floatValue;
    var min = props.min,
        max = props.max;
    return floatValue >= min && floatValue <= max;
  };

  var handleSliderChange = function handleSliderChange(event, newValue) {
    if (value === newValue) {
      return;
    }

    setValue(newValue);

    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  var handleSliderChangeCommitted = function handleSliderChangeCommitted(event, newValue) {
    setValue(newValue);
    props.onChangeCommitted(newValue);
  };

  var handleInputChange = function handleInputChange(_ref2) {
    var floatValue = _ref2.floatValue;

    if (floatValue !== value) {
      setValue(floatValue);

      if (props.onChangeCommitted) {
        return props.onChangeCommitted(floatValue);
      }

      props.onChange(newValue);
    }
  }; // TODO: вытащить label из inputProps и сделать его общим для компонента


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
    isAllowed: limit // aria-labelledby="slider"
    ,
    InputProps: {
      readOnly: props.discrete
    }
  })), _react["default"].createElement(_Slider["default"], _extends({}, sliderProps, {
    classes: {
      root: classes.sliderRoot,
      markLabel: classes.sliderMarkLabel,
      mark: classes.sliderMark
    },
    value: value,
    onChange: handleSliderChange,
    onChangeCommitted: handleSliderChangeCommitted // aria-labelledby="slider"
    ,
    min: min,
    max: max
  })));
});

SliderComponent.defaultProps = {
  onChange: function onChange() {
    return null;
  },
  onChangeCommitted: function onChangeCommitted() {
    return null;
  }
};
var _default = SliderComponent;
exports["default"] = _default;