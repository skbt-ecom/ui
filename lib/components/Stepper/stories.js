"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Stepper = _interopRequireDefault(require("./Stepper"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
var stepsVertical = [{
  label: 'Ваша заявка принята',
  content: 'Загрузка'
}, {
  label: 'Заявка рассматривается',
  content: 'Необходимо добавить следующие документы'
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
var stepsHorizontal = [{
  label: 'Паспортные данные',
  content: '+10% к одобрению'
}, {
  label: 'Занятость',
  content: '+15% к одобрению'
}, {
  label: 'Адрес доставки',
  content: '+20% к одобрению'
}];
(0, _react2.storiesOf)('Stepper', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Vertical', function () {
  return _react["default"].createElement(_Stepper["default"], {
    steps: stepsVertical,
    orientation: "vertical"
  });
}).add('Horizontal', function () {
  return _react["default"].createElement(_Stepper["default"], {
    steps: stepsHorizontal,
    activeStep: 1
  });
});