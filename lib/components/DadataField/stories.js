"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _DadataField = _interopRequireDefault(require("./DadataField"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('DadataField', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('ФИО', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DadataField["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    type: 'fio',
    label: 'ФИО'
  }));
}).add('Адрес', function () {
  return _react["default"].createElement(_DadataField["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    type: 'address',
    label: 'Адрес',
    dadataOptions: {}
  });
});