"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _PageStatus = _interopRequireDefault(require("./PageStatus"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('PageStatus', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Success: no description', function () {
  return /*#__PURE__*/_react["default"].createElement(_PageStatus["default"], {
    success: true
  });
}).add('Success: with description', function () {
  return /*#__PURE__*/_react["default"].createElement(_PageStatus["default"], {
    success: true,
    successDesc: "\u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430 \u0412\u0430\u043C \u043F\u0440\u0438\u0434\u0435\u0442 SMS c \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0430\u043A\u0446\u0438\u0438"
  });
}).add('Success: with content', function () {
  return /*#__PURE__*/_react["default"].createElement(_PageStatus["default"], {
    success: true,
    content: /*#__PURE__*/_react["default"].createElement("h3", null, "Some content")
  });
}).add('Error: default', function () {
  return /*#__PURE__*/_react["default"].createElement(_PageStatus["default"], null);
}).add('Error: with content', function () {
  return /*#__PURE__*/_react["default"].createElement(_PageStatus["default"], {
    content: /*#__PURE__*/_react["default"].createElement("h3", null, "Some content")
  });
});