"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Slider = _interopRequireDefault(require("@material-ui/core/Slider"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _styles = _interopRequireDefault(require("./styles"));

//https://github.com/s-yadav/react-number-format
var SliderComponent = /*#__PURE__*/_react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var _useState = (0, _react.useState)(props.defaultValue || props.value || props.min),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNumberFormat["default"], (0, _extends2["default"])({}, inputProps, {
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
  })), /*#__PURE__*/_react["default"].createElement(_Slider["default"], (0, _extends2["default"])({}, sliderProps, {
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
  }
};
var _default = SliderComponent;
exports["default"] = _default;