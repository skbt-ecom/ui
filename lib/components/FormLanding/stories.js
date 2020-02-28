"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _FormLanding = _interopRequireDefault(require("./FormLanding"));

var _PhoneField = _interopRequireDefault(require("./fields/PhoneField"));

var _DateField = _interopRequireDefault(require("./fields/DateField"));

var _DadataField = _interopRequireDefault(require("./fields/DadataField"));

var _AddressField = _interopRequireDefault(require("./fields/AddressField"));

var _MaskedField = _interopRequireDefault(require("./fields/MaskedField"));

var _SelectField = _interopRequireDefault(require("./fields/SelectField"));

var _SubmitButton = _interopRequireDefault(require("./fields/SubmitButton"));

var _theme = _interopRequireDefault(require("../../style/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the storybook libraries
//form
//fields
var SELECT_ITEMS = [{
  value: 1,
  label: 'one'
}, {
  value: 2,
  label: 'two'
}, {
  value: 3,
  label: 'three'
}];
(0, _react2.storiesOf)('FormLanding', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return _react["default"].createElement(_FormLanding["default"], {
    onChangeFields: (0, _addonActions.action)('onChangeFields'),
    onSubmit: (0, _addonActions.action)('onSubmit')
  }, _react["default"].createElement(_PhoneField["default"], {
    name: 'phone',
    value: 123
  }), _react["default"].createElement(_DateField["default"], {
    name: 'birthdate',
    label: 'Date' // validAge={20} // if required birthdateValidator

  }), _react["default"].createElement(_MaskedField["default"], {
    name: 'masked',
    label: 'Masked'
  }), _react["default"].createElement(_DadataField["default"], {
    type: 'fio' // or address
    ,
    name: 'fio'
  }), _react["default"].createElement(_AddressField["default"], {
    name: 'address'
  }), _react["default"].createElement(_SelectField["default"], {
    name: 'select',
    items: SELECT_ITEMS
  }), _react["default"].createElement(_SubmitButton["default"], null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"));
});