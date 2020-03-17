"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _VerifyCode = _interopRequireDefault(require("./VerifyCode"));

var _themeHalva = _interopRequireDefault(require("../../style/themeHalva"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('VerifyCode', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_themeHalva["default"]])).add('Default', function () {
  return _react["default"].createElement(_VerifyCode["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    helperText: _react["default"].createElement(_react["default"].Fragment, null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u0447\u0435\u0440\u0435\u0437 ", _react["default"].createElement("strong", null, "25 \u0441\u0435\u043A"))
  });
}).add('Error', function () {
  return _react["default"].createElement(_VerifyCode["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    error: true,
    helperText: 'Неверный код',
    classes: {
      helperTextRoot: '11111'
    }
  });
});