"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Slider = _interopRequireDefault(require("./Slider"));

var _theme = _interopRequireDefault(require("../../style/theme"));

var _story = require("./story.config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Slider["default"], {
    onChange: handleOnChange,
    onChangeCommitted: handleOnChangeCommitted,
    inputProps: _story.inputProps,
    sliderProps: dynamicStepSliderProps,
    min: 150000 // if no initialValue using min value as initial
    ,
    max: 30000000
  }));
};

(0, _react2.storiesOf)('Slider', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_Slider["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    label: 'Сумма кредита',
    inputProps: _story.inputProps,
    sliderProps: _story.sliderProps // initialValue={300}
    ,
    min: 100 // if no initialValue using min value as initial
    ,
    max: 2000 // value={500}

  });
}).add('Committed', function () {
  return _react["default"].createElement(_Slider["default"], {
    onChangeCommitted: (0, _addonActions.action)('onChangeCommitted'),
    label: 'Сумма кредита',
    inputProps: _story.inputProps,
    sliderProps: _story.sliderProps,
    min: 150000,
    max: 30000000
  });
}).add('Discrete', function () {
  return _react["default"].createElement(_Slider["default"], {
    discrete: true,
    onChange: (0, _addonActions.action)('onChange'),
    inputProps: _story.inputProps,
    sliderProps: _story.discreteSliderProps,
    min: 100,
    max: 1000
  });
}).add('Dynamic step', function () {
  return _react["default"].createElement(SliderWrapper, {
    onChangeCommitted: (0, _addonActions.action)('onChangeCommitted')
  });
});