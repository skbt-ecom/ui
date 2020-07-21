"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _PhoneField = _interopRequireDefault(require("./PhoneField"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
var PhoneFieldWrapper = function PhoneFieldWrapper(props) {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(value) {
    setValue(value);
    props.onChange(value);
  };

  var handleBlur = function handleBlur(fieldName) {
    return function (valueBlur) {
      console.log(fieldName);
      props.onBlur(valueBlur);
    };
  };

  return /*#__PURE__*/_react["default"].createElement(_PhoneField["default"], (0, _extends2["default"])({}, props, {
    onChange: handleChange,
    value: value,
    onBlur: handleBlur('phone')
  }));
};

(0, _react2.storiesOf)('PhoneField', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(PhoneFieldWrapper, {
    label: 'Телефон',
    onChange: (0, _addonActions.action)('onChange'),
    onBlur: (0, _addonActions.action)('onBlur') // lazy={false}
    // placeholderChar={' '}

  });
});