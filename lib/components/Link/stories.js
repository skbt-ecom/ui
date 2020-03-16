"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Link = _interopRequireDefault(require("./Link"));

var _themeHalva = _interopRequireDefault(require("../../style/themeHalva"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('Link', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_themeHalva["default"]])).add('Default', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Link["default"], {
    onClick: (0, _addonActions.action)('onClick'),
    component: "button"
  }, "Button Link"), _react["default"].createElement("br", null), _react["default"].createElement(_Link["default"], {
    onClick: (0, _addonActions.action)('onClick'),
    component: "button",
    color: "textPrimary"
  }, "Button Link"));
});