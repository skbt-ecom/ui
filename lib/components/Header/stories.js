"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _addonActions = require("@storybook/addon-actions");

var _Header = _interopRequireDefault(require("./Header"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('Header', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_Header["default"], {
    withButton: true,
    onButtonClick: (0, _addonActions.action)('onButtonClick')
  });
}).add('withHalvaLogo', function () {
  return _react["default"].createElement(_Header["default"], {
    type: 'withHalvaLogo'
  });
});