"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Modal = _interopRequireDefault(require("./Modal"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
var ModalExample = function ModalExample(props) {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: handleOpen
  }, "Open Modal"), _react["default"].createElement(_Modal["default"], (0, _extends2["default"])({
    open: open,
    onClose: handleClose
  }, props)));
};

(0, _react2.storiesOf)('Modal', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(ModalExample, null, _react["default"].createElement("div", {
    style: {
      background: 'white',
      width: '400px',
      height: '400px'
    }
  }, "Modal content"));
});