"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _DadataField = _interopRequireDefault(require("./DadataField"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
var DadataFieldWrapper = function DadataFieldWrapper(props) {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var onChange = function onChange(value) {
    setValue(value);
    props.onChange(value);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DadataField["default"], (0, _extends2["default"])({}, props, {
    onChange: onChange,
    value: value
  })));
};

(0, _react2.storiesOf)('DadataField', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('ФИО', function () {
  return _react["default"].createElement(DadataFieldWrapper, {
    onChange: (0, _addonActions.action)('onChange'),
    type: 'fio',
    label: 'ФИО'
  });
}).add('Адрес', function () {
  return _react["default"].createElement(_DadataField["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    type: 'address',
    label: 'Адрес',
    dadataOptions: {},
    fullWidth: true
  });
});