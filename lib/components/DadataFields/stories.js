"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _DadataAddress = _interopRequireDefault(require("./DadataAddress"));

var _DadataAddressFlat = _interopRequireDefault(require("./DadataAddressFlat"));

var _DadataFio = _interopRequireDefault(require("./DadataFio"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DadataAddressFlatWrapper = function DadataAddressFlatWrapper(props) {
  var _React$useState = _react["default"].useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      incomingValue = _React$useState2[0],
      setIncomingValue = _React$useState2[1];

  setTimeout(function () {
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