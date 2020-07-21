"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Default = Default;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Component = _interopRequireDefault(require("./Component"));

var _theme = _interopRequireDefault(require("../../style/theme"));

var _default = {
  title: '_boilerplate',
  decorators: [(0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])]
};
exports["default"] = _default;

function Default() {
  return /*#__PURE__*/_react["default"].createElement(_Component["default"], {
    onChange: (0, _addonActions.action)('onChange')
  });
}