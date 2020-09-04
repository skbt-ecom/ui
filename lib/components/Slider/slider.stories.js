"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

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
}).add('Dynamic restriction', function () {
  var _useState = (0, _react.useState)(150000),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      min = _useState2[0],
      setMin = _useState2[1];

  var _useState3 = (0, _react.useState)(30000000),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      max = _useState4[0],
      setMax = _useState4[1];

  var _useState5 = (0, _react.useState)(150000),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      sum = _useState6[0],
      SetSum = _useState6[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Sum = ", sum), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      setMin(200000);
    }
  }, "Set min = 200000"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      setMax(1000000);
    }
  }, "Set max = 1000000")), /*#__PURE__*/_react["default"].createElement(_Slider["default"] // onChange={action('onChange')}
  , {
    onChangeCommitted: SetSum,
    inputProps: _story.inputProps,
    sliderProps: _story.sliderProps,
    min: min,
    max: max,
    value: sum
  }));
});