"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _FormLanding = _interopRequireDefault(require("./FormLanding"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
var formConfig = {
  title: _react["default"].createElement("span", {
    className: "title-class"
  }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443"),
  fields: ['fio', 'fio']
};
(0, _react2.storiesOf)('FormLanding', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_FormLanding["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    config: formConfig
  });
});