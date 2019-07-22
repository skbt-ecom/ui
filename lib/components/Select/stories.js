"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Select = _interopRequireDefault(require("./Select"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
var socialStatuses = [{
  value: 'Работодатель',
  label: 'Работодатель'
}, {
  value: 'Пенсионер',
  label: 'Пенсионер'
}, {
  value: 'Работающий пенсионер',
  label: 'Работающий пенсионер'
}, {
  value: 'Работает / Служит',
  label: 'Работает / Служит'
}, {
  value: 'ИП',
  label: 'ИП'
}];
(0, _react2.storiesOf)('Select', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_Select["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    items: socialStatuses,
    name: 'select',
    value: socialStatuses[3].value
  });
});