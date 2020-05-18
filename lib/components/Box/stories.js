"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Box = _interopRequireDefault(require("./Box"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('Box', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_Box["default"], null);
});