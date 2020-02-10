"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("./Button"));

var _ButtonESIA = _interopRequireDefault(require("./ButtonESIA"));

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _themeHalva = _interopRequireDefault(require("../../style/themeHalva"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
// Import our component from this folder
// import theme from '../../style/theme';
(0, _react2.storiesOf)('Button', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_themeHalva["default"]])).add('Default', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button["default"], {
    color: 'primary',
    onClick: (0, _addonActions.action)('clicked btn'),
    classes: {
      label: 'my-label',
      root: 'my-root'
    }
  }, "Button"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Button["default"], {
    color: 'secondary',
    onClick: (0, _addonActions.action)('clicked btn'),
    classes: {
      label: 'my-label',
      root: 'my-root'
    }
  }, "Button"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Button["default"], {
    color: 'primary',
    variant: "outlined",
    onClick: (0, _addonActions.action)('clicked btn'),
    classes: {
      label: 'my-label',
      root: 'my-root'
    }
  }, "Button"));
}).add('ESIA', function () {
  return _react["default"].createElement(_ButtonESIA["default"], {
    onClick: (0, _addonActions.action)('ESIA clicked') // withouthDescr // to remove description text

  }, "\u0412\u0445\u043E\u0434 \u0447\u0435\u0440\u0435\u0437 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C");
});