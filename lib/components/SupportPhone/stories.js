"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _addonActions = require("@storybook/addon-actions");

var _SupportPhone = _interopRequireDefault(require("./SupportPhone"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
(0, _react2.storiesOf)('SupportPhone', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_SupportPhone["default"], null);
}).add('withButton', function () {
  return /*#__PURE__*/_react["default"].createElement(_SupportPhone["default"], {
    withButton: true,
    onButtonClick: (0, _addonActions.action)('onButtonClick')
  });
});