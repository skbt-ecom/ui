"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Slider = _interopRequireDefault(require("./Slider"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
var inputProps = {
  suffix: ' ₽',
  label: 'Сумма кредита'
};
var sliderProps = {
  suffix: ' ₽'
};
(0, _react2.storiesOf)('Slider', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_Slider["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    inputProps: inputProps,
    sliderProps: sliderProps,
    min: 0,
    max: 2000
  });
});