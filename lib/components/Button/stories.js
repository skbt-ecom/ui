"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("./Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('Button', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Typography["default"], {
    component: "div"
  }, _react["default"].createElement(_Button["default"], {
    color: "primary",
    onClick: (0, _addonActions.action)('clicked btn1'),
    fontWeight: 700
  }, "Button")), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Button["default"], {
    color: "secondary",
    onClick: (0, _addonActions.action)('clicked btn2')
  }, "Button"));
});