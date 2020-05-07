"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Slider = _interopRequireDefault(require("./Slider"));

var _SliderLogarithmic = _interopRequireDefault(require("./SliderLogarithmic"));

var _theme = _interopRequireDefault(require("../../style/theme"));

var _story = require("./story.config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SliderWrapper = function SliderWrapper(props) {
  var _React$useState = _react["default"].useState(1000),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1];

  var getStepValue = function getStepValue(sliderVal) {
    if (sliderVal < 300000) {
      return 1000;
    }

    if (sliderVal < 1000000) {
      return 5000;
    }

    return 100000;
  };

  var handleOnChangeCommitted = function handleOnChangeCommitted(value) {
    props.onChangeCommitted(value);
  };

  var handleOnChange = function handleOnChange(value) {
    setStep(getStepValue(value));
  };

  var dynamicStepSliderProps = {
    step: step
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    onChange: handleOnChange,
    onChangeCommitted: handleOnChangeCommitted,
    inputProps: _story.inputProps,
    sliderProps: dynamicStepSliderProps,
    min: 150000 // if no defaultValue using min value as initial
    ,
    max: 30000000
  }));
};

(0, _react2.storiesOf)('Slider', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    label: 'Сумма кредита',
    inputProps: _story.inputProps,
    sliderProps: _story.sliderProps // defaultValue={300}
    ,
    min: 100 // if no defaultValue using min value as initial
    ,
    max: 2000 // value={500}

  });
}).add('Committed', function () {
  return /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    onChangeCommitted: (0, _addonActions.action)('onChangeCommitted'),
    label: 'Сумма кредита',
    inputProps: _story.inputProps,
    sliderProps: _story.sliderProps,
    min: 150000,
    max: 30000000
  });
}).add('Dynamic step', function () {
  return /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
    onChangeCommitted: (0, _addonActions.action)('onChangeCommitted')
  });
}).add('Logarithmic', function () {
  return /*#__PURE__*/_react["default"].createElement(_SliderLogarithmic["default"] // onChange={action('onChange')}
  , {
    onChangeCommitted: (0, _addonActions.action)('onChangeCommitted'),
    inputProps: _story.inputProps,
    sliderProps: _story.sliderProps,
    min: 150000,
    max: 30000000,
    defaultValue: 2000000 // withSpaceForHelperTxt

  });
}).add('withSpaceForHelperTxt', function () {
  return /*#__PURE__*/_react["default"].createElement(_SliderLogarithmic["default"] // onChange={action('onChange')}
  , {
    onChangeCommitted: (0, _addonActions.action)('onChangeCommitted'),
    inputProps: _story.inputProps,
    sliderProps: _story.sliderProps,
    min: 150000,
    max: 30000000,
    value: 2000000,
    withSpaceForHelperTxt: true
  });
});