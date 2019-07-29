"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Slider = _interopRequireDefault(require("./Slider"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var marks = [{
  value: 0,
  label: '0°C'
}, {
  value: 25,
  label: '25°C'
}, {
  value: 50,
  label: '50°C'
}, {
  value: 75,
  label: '75°C'
}, {
  value: 100,
  label: '100°C'
}];
var marks3 = [{
  value: 100,
  label: '0°C'
}, {
  value: 500,
  label: '50°C'
}, {
  value: 1000,
  label: '100°C'
}];
var inputProps = {
  suffix: ' ₽'
};
var sliderProps = {
  suffix: ' ₽'
};

var discreteSliderProps = _defineProperty({
  suffix: ' ₽',
  step: null,
  marks: true
}, "marks", marks3);

(0, _react2.storiesOf)('Slider', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_Slider["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    label: 'Сумма кредита',
    inputProps: inputProps,
    sliderProps: sliderProps // initialValue={300}
    ,
    min: 100 // if no initialValue using min value as initial
    ,
    max: 2000 // value={500}

  });
}).add('Committed', function () {
  return _react["default"].createElement(_Slider["default"], {
    onChangeCommitted: (0, _addonActions.action)('onChangeCommitted'),
    label: 'Сумма кредита',
    inputProps: inputProps,
    sliderProps: sliderProps // initialValue={300}
    ,
    min: 150000 // if no initialValue using min value as initial
    ,
    max: 30000000 // value={500}

  });
}).add('Discrete', function () {
  return _react["default"].createElement(_Slider["default"], {
    discrete: true,
    onChange: (0, _addonActions.action)('onChange'),
    inputProps: inputProps,
    sliderProps: discreteSliderProps // initialValue={300}
    ,
    min: 100 // if no initialValue using min value as initial
    ,
    max: 1000 // value={500}

  });
});