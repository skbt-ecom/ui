"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _PageStatus = _interopRequireDefault(require("./PageStatus"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('PageStatus', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Success', function () {
  return _react["default"].createElement(_PageStatus["default"], {
    success: true
  });
}).add('Error', function () {
  return _react["default"].createElement(_PageStatus["default"], null);
});