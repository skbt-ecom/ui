"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _RadioGroupField = _interopRequireDefault(require("./RadioGroupField"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
var items = [{
  value: 'm',
  label: 'Мужской'
}, {
  value: 'f',
  label: 'Женский'
}];
(0, _react2.storiesOf)('RadioGroupField', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_RadioGroupField["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    items: items,
    label: 'Ваш пол:',
    classes: {
      formLabel: 'class1',
      formControl: 'class2',
      group: 'class 3'
    },
    direction: 'column' // 'row' by default
    ,
    defaultValue: 'm' // value={'m'}

  });
});