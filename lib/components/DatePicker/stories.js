"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _theme = _interopRequireDefault(require("../../style/theme"));

(0, _react2.storiesOf)('DatePicker', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_DatePicker["default"], null);
}).add('set value', function () {
  return _react["default"].createElement(_DatePicker["default"], {
    value: new Date(2000, 1, 1)
  });
}).add('max/min Date', function () {
  return _react["default"].createElement(_DatePicker["default"], {
    minDate: new Date(),
    maxDate: new Date(2019, 9, 1)
  });
});