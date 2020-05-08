"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _AddressField = _interopRequireDefault(require("./AddressField"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('AddressField', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_AddressField["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    helperText: {
      addressDadata: 'Район, город, улица, дом'
    },
    classes: {
      addressDadataClasses: {
        container: 'class1'
      },
      flatInfoClasses: {
        container: 'class2'
      }
    }
  });
}).add('Errors', function () {
  return _react["default"].createElement(_AddressField["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    error: {
      addressDadata: 'addressDadata error txt',
      flat: 'flat error text'
    },
    helperText: {
      addressDadata: 'addressDadata error txt',
      flat: 'flat error text'
    }
  });
});