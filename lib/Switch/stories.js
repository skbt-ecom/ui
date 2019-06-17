"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Switch = _interopRequireDefault(require("./Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('Switch', module).add('Default', function () {
  return _react["default"].createElement(_Switch["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    value: "checkedA",
    inputProps: {
      'aria-label': 'secondary checkbox'
    }
  });
});