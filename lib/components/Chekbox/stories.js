"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
var options = [{
  label: 'Apple',
  value: 'Apple'
}, {
  label: 'Pear',
  value: 'Pear'
}, {
  label: 'Orange',
  value: 'Orange'
}];
(0, _react2.storiesOf)('Chekbox', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Checkbox', function () {
  return _react["default"].createElement(_Checkbox["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    label: 'Label',
    color: 'primary'
  });
}).add('CheckboxGroup', function () {
  return _react["default"].createElement(_CheckboxGroup["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    options: options,
    formLabel: {
      label: 'Label'
    }
  });
});