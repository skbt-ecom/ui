"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Slider = _interopRequireDefault(require("./Slider"));

var _SliderLogarithmic = _interopRequireDefault(require("./SliderLogarithmic"));

var _theme = _interopRequireDefault(require("../../style/theme"));

var _story = require("./story.config");

// Import the storybook libraries
// Import our component from this folder
var SliderWrapper = function SliderWrapper(props) {
  var _React$useState = _react["default"].useState(1000),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
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
    defaultValue: 2000000
  });
});