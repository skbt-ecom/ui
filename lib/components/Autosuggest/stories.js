"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Autosuggest = _interopRequireDefault(require("./Autosuggest"));

var _theme = _interopRequireDefault(require("../../style/theme"));

var _regionEnums = require("./regionEnums");

// Import the storybook libraries
// Import our component from this folder
var AutosuggestFieldWrapper = function AutosuggestFieldWrapper(props) {
  var _useState = (0, _react.useState)(props.value || ''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var onChange = function onChange(value) {
    setValue(value);
    props.onChange(value);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Autosuggest["default"], (0, _extends2["default"])({}, props, {
    onChange: onChange,
    value: value
  })));
};

(0, _react2.storiesOf)('Autosuggest', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", null, "\u041F\u0440\u0438\u043C\u0435\u0440 \u0441 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043C\u0438"), /*#__PURE__*/_react["default"].createElement(AutosuggestFieldWrapper, {
    onChange: (0, _addonActions.action)('onChange'),
    suggestions: _regionEnums.regions,
    label: 'Регион',
    fullWidth: true,
    value: _regionEnums.regions[0]
  }));
});