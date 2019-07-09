"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Autosuggest = _interopRequireDefault(require("./Autosuggest"));

var _theme = _interopRequireDefault(require("../../style/theme"));

var _regionEnums = require("./regionEnums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('Autosuggest', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("h2", null, "\u041F\u0440\u0438\u043C\u0435\u0440 \u0441 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043C\u0438"), _react["default"].createElement(_Autosuggest["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    suggestions: _regionEnums.regions,
    label: 'Регион',
    fullWidth: true
  }));
});