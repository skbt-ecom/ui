"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _RadioGroupBtn = _interopRequireDefault(require("./RadioGroupBtn"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
var items = [{
  value: 100000,
  label: '100 000 P'
}, {
  value: 50000,
  label: '50 000 P'
}, {
  value: 5340,
  label: '5340 P'
}, {
  value: 7409,
  label: '7409 P'
}, {
  value: 9492,
  label: '9492 P'
}];
(0, _react2.storiesOf)('RadioGroupBtn', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_RadioGroupBtn["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    numberType: true,
    items: items,
    name: 'prices',
    value: 5340,
    classes: {
      container: 'container-class',
      item: 'item-class'
    }
  });
});