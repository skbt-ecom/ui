"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _PhoneMain = _interopRequireDefault(require("./PhoneMain"));

var _theme = _interopRequireDefault(require("../../style/theme"));

(0, _react2.storiesOf)('PhoneMain', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_PhoneMain["default"], null);
}).add('Custom phone', function () {
  return /*#__PURE__*/_react["default"].createElement(_PhoneMain["default"], {
    phone: "8 800 100-77-72"
  });
}).add('Custom hint', function () {
  return /*#__PURE__*/_react["default"].createElement(_PhoneMain["default"], {
    phoneHint: "Custom hint"
  });
}).add('Custom phones', function () {
  return /*#__PURE__*/_react["default"].createElement(_PhoneMain["default"], {
    phones: ['8 800 100-77-72', '8 800 100-10-20']
  });
});