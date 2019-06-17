"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('Button', module).add('Default', function () {
  return _react["default"].createElement(_Button["default"], {
    color: "primary",
    variant: "contained"
  }, "Lol");
});