"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _addonActions = require("@storybook/addon-actions");

var _Header = _interopRequireDefault(require("./Header"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('Header', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    withButton: true,
    onButtonClick: (0, _addonActions.action)('onButtonClick')
  });
}).add('withHalvaLogo', function () {
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    type: 'withHalvaLogo'
  });
}).add('withButtonProps', function () {
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    buttonProps: {
      color: 'secondary',
      label: 'Присоединиться'
    },
    onButtonClick: (0, _addonActions.action)('onButtonClick')
  });
});