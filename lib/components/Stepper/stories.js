"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Stepper = _interopRequireDefault(require("./Stepper"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
var steps = [{
  label: 'Ваша заявка принята',
  content: 'Загрузка'
}, {
  label: 'Заявка рассматривается',
  content: 'Загрузка'
}, {
  label: 'Получено решение',
  content: 'Загрузка'
}, {
  label: 'Передано в доставку',
  content: 'Загрузка'
}, {
  label: 'Выдано',
  content: 'Загрузка'
}];
(0, _react2.storiesOf)('Stepper', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_Stepper["default"], {
    steps: steps
  });
});