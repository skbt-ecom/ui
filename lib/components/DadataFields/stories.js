"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _DadataAddress = _interopRequireDefault(require("./DadataAddress"));

var _DadataAddressFlat = _interopRequireDefault(require("./DadataAddressFlat"));

var _DadataFio = _interopRequireDefault(require("./DadataFio"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
var DadataAddressFlatWrapper = function DadataAddressFlatWrapper(props) {
  var _React$useState = _react["default"].useState(''),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      incomingValue = _React$useState2[0],
      setIncomingValue = _React$useState2[1];

  (0, _setTimeout2["default"])(function () {
    setIncomingValue('г Саратов, ул им Чернышевского Н.Г. д.80 кв. 867');
  }, 1000);
  return _react["default"].createElement(_DadataAddressFlat["default"], {
    onBlur: (0, _addonActions.action)('onBlur'),
    label: 'Адрес',
    incomingValue: incomingValue
  });
};

(0, _react2.storiesOf)('DadataFields', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Адрес', function () {
  return _react["default"].createElement(_DadataAddress["default"], {
    onBlur: (0, _addonActions.action)('onBlur'),
    label: 'Адрес',
    dadataOptions: {},
    fullWidth: true
  });
}).add('ФИО', function () {
  return _react["default"].createElement(_DadataFio["default"], {
    onBlur: (0, _addonActions.action)('onBlur'),
    label: 'ФИО',
    fullWidth: true
  });
}).add('Адрес с кв', function () {
  return _react["default"].createElement(DadataAddressFlatWrapper, null);
});