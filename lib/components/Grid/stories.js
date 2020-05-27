"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Grid = _interopRequireDefault(require("./Grid"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('Grid', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  var _context;

  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    direction: "column",
    spacing: 2
  }, (0, _map["default"])(_context = [0, 1, 2]).call(_context, function (value) {
    return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      key: value,
      item: true
    }, value);
  }))));
});