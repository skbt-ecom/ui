"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _addonActions = require("@storybook/addon-actions");

var _halva = _interopRequireDefault(require("./halva.svg"));

var _HeaderNew = _interopRequireDefault(require("./HeaderNew"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('HeaderNew', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_HeaderNew["default"], {
    ButtonProps: {
      color: 'secondary',
      children: 'Присоединиться',
      onClick: (0, _addonActions.action)('onButtonClick')
    }
  });
}).add('Multiple phones', function () {
  return _react["default"].createElement(_HeaderNew["default"], {
    ButtonProps: {
      color: 'secondary',
      children: 'Присоединиться',
      onClick: (0, _addonActions.action)('onButtonClick')
    },
    PhoneProps: {
      phones: ['8 927 463-12-81', '8 952 031-34-20']
    }
  });
}).add('Custom content', function () {
  return _react["default"].createElement(_HeaderNew["default"], {
    right: _react["default"].createElement("img", {
      src: _halva["default"],
      alt: "\u0425\u0430\u043B\u0432\u0430"
    })
  });
});