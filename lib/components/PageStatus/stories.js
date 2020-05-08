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
    success: true,
    successDesc: "\u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430 \u0412\u0430\u043C \u043F\u0440\u0438\u0434\u0435\u0442 SMS c \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0430\u043A\u0446\u0438\u0438"
  });
}).add('Error', function () {
  return _react["default"].createElement(_PageStatus["default"], null);
});