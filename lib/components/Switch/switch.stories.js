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

var _styles = require("@material-ui/core/styles");

var _Switch = _interopRequireDefault(require("./Switch"));

var _theme = _interopRequireDefault(require("../../style/theme"));

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    labelText: {
      fontSize: 16
    }
  };
});
var _default = {
  title: 'Switch',
  decorators: [(0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])]
};
exports["default"] = _default;

function Default() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    label: 'Label',
    classes: {
      label: classes.labelText
    }
  });
}