"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Default = Default;
exports.ESIA = ESIA;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Button = _interopRequireDefault(require("./Button"));

var _ButtonESIA = _interopRequireDefault(require("./ButtonESIA"));

var _theme = _interopRequireDefault(require("../../style/theme"));

var _default = {
  title: 'Button',
  decorators: [(0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])]
};
exports["default"] = _default;

function Default() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: 'primary',
    onClick: (0, _addonActions.action)('clicked btn'),
    classes: {
      label: 'my-label',
      root: 'my-root'
    }
  }, "Button"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: 'secondary',
    onClick: (0, _addonActions.action)('clicked btn'),
    classes: {
      label: 'my-label',
      root: 'my-root'
    }
  }, "Button"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: 'primary',
    variant: "outlined",
    onClick: (0, _addonActions.action)('clicked btn'),
    classes: {
      label: 'my-label',
      root: 'my-root'
    }
  }, "Button"));
}

function ESIA() {
  return /*#__PURE__*/_react["default"].createElement(_ButtonESIA["default"], {
    onClick: (0, _addonActions.action)('ESIA clicked') // withouthDescr // to remove description text

  }, "\u0412\u0445\u043E\u0434 \u0447\u0435\u0440\u0435\u0437 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C");
}