"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _FormLanding = _interopRequireDefault(require("./FormLanding"));

var _SliderLogarithmic = _interopRequireDefault(require("./fields/SliderLogarithmic"));

var _PhoneField = _interopRequireDefault(require("./fields/PhoneField"));

var _DateField = _interopRequireDefault(require("./fields/DateField"));

var _DadataField = _interopRequireDefault(require("./fields/DadataField"));

var _AddressField = _interopRequireDefault(require("./fields/AddressField"));

var _MaskedField = _interopRequireDefault(require("./fields/MaskedField"));

var _SelectField = _interopRequireDefault(require("./fields/SelectField"));

var _EmailField = _interopRequireDefault(require("./fields/EmailField"));

var _AcceptmentField = _interopRequireDefault(require("./fields/AcceptmentField"));

var _AutocompleteField = _interopRequireDefault(require("./fields/AutocompleteField"));

var _TextField = _interopRequireDefault(require("./fields/TextField"));

var _DadataAddress = _interopRequireDefault(require("./fields/DadataFields/DadataAddress"));

var _DadataFio = _interopRequireDefault(require("./fields/DadataFields/DadataFio"));

var _DadataAddressFlat = _interopRequireDefault(require("./fields/DadataFields/DadataAddressFlat"));

var _SubmitButton = _interopRequireDefault(require("./fields/SubmitButton"));

var _regionEnums = require("../AutocompleteField/regionEnums");

var _theme = _interopRequireDefault(require("../../style/theme"));

var _validators = require("./validators");

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

var FormWrapper = function FormWrapper() {
  var formRef = _react["default"].useRef(null);

  var onSubmit = function onSubmit(values) {
    console.log('values', values);
  };

  return /*#__PURE__*/_react["default"].createElement(_FormLanding["default"], {
    onChangeFields: (0, _addonActions.action)('onChangeFields'),
    onSubmit: onSubmit,
    ref: formRef
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return formRef.current.setFields({
        text: {
          value: 1234
        }
      });
    }
  }, "setValue"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return console.log(formRef.current.getFieldsValue());
    }
  }, "getValue"), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    name: 'text',
    validate: _validators.requiredValidator
  }), /*#__PURE__*/_react["default"].createElement(_SubmitButton["default"] // classes={{ container: 'styles.buttonWrapper' }}
  , null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"));
};

(0, _react2.storiesOf)('FormLanding', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Dadata', function () {
  return /*#__PURE__*/_react["default"].createElement(_FormLanding["default"], {
    onChangeFields: (0, _addonActions.action)('onChangeFields'),
    onSubmit: (0, _addonActions.action)('onSubmit')
  }, /*#__PURE__*/_react["default"].createElement(_DadataAddress["default"], {
    name: "address2",
    label: "\u0410\u0434\u0440\u0435\u0441"
  }), /*#__PURE__*/_react["default"].createElement(_DadataFio["default"], {
    name: "fio",
    label: "\u0424\u0418\u041E"
  }), /*#__PURE__*/_react["default"].createElement(_DadataAddressFlat["default"], {
    name: "addressWithFlat",
    label: "\u0410\u0434\u0440\u0435\u0441 \u043D\u043E\u0432\u044B\u0439"
  }), /*#__PURE__*/_react["default"].createElement(_SubmitButton["default"] // classes={{ container: 'styles.buttonWrapper' }}
  , null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"));
}).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_FormLanding["default"], {
    onChangeFields: (0, _addonActions.action)('onChangeFields'),
    onSubmit: (0, _addonActions.action)('onSubmit')
  }, /*#__PURE__*/_react["default"].createElement(_SliderLogarithmic["default"], {
    name: 'sum',
    label: 'Сумма кредита',
    min: 150000,
    max: 30000000
  }), /*#__PURE__*/_react["default"].createElement(_PhoneField["default"], {
    name: 'phone',
    value: 123
  }), /*#__PURE__*/_react["default"].createElement(_DateField["default"], {
    name: 'birthdate',
    label: 'Date' // validAgeMin={20} // if required birthdateValidator
    // validAgeMax={30} // if required birthdateValidator

  }), /*#__PURE__*/_react["default"].createElement(_MaskedField["default"], {
    name: 'masked',
    label: 'Masked'
  }), /*#__PURE__*/_react["default"].createElement(_DadataField["default"], {
    type: 'fio' // or address
    ,
    name: 'fio'
  }), /*#__PURE__*/_react["default"].createElement(_AddressField["default"], {
    name: 'address'
  }), /*#__PURE__*/_react["default"].createElement(_SelectField["default"], {
    name: 'select',
    items: SELECT_ITEMS
  }), /*#__PURE__*/_react["default"].createElement(_EmailField["default"], {
    name: 'email',
    label: 'email'
  }), /*#__PURE__*/_react["default"].createElement(_AutocompleteField["default"], {
    name: 'autosuggest',
    options: _regionEnums.regions
  }), /*#__PURE__*/_react["default"].createElement(_AcceptmentField["default"], {
    name: 'agree',
    color: "secondary" // classes={{ fieldWrapperAcceptment: 'styles.fieldWrapperAcceptment' }}

  }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    name: 'text' // classes={{ fieldWrapper: 'ololo' }} //if required pass classes to wrapper component
    // classsesComponent={{ root: 'rololo' }} //if required pass classes to wrapped component

  }), /*#__PURE__*/_react["default"].createElement(_SubmitButton["default"] // classes={{ container: 'styles.buttonWrapper' }}
  , null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"));
}).add('test', function () {
  return /*#__PURE__*/_react["default"].createElement(FormWrapper, null);
});