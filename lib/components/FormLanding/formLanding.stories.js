"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.CreditAmountSlider = CreditAmountSlider;
exports.DadataFields = DadataFields;
exports.FormWrapper = FormWrapper;
exports.FormPassport = FormPassport;
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _theme = _interopRequireDefault(require("../../style/theme"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _FormLanding = _interopRequireDefault(require("./FormLanding"));

var _CheckboxField = _interopRequireDefault(require("./fields/CheckboxField"));

var _DadataAddress = _interopRequireDefault(require("./fields/DadataFields/DadataAddress"));

var _DadataAddressFlat = _interopRequireDefault(require("./fields/DadataFields/DadataAddressFlat"));

var _DadataFio = _interopRequireDefault(require("./fields/DadataFields/DadataFio"));

var _DateField = _interopRequireDefault(require("./fields/DateField"));

var _MaskedField = _interopRequireDefault(require("./fields/MaskedField"));

var _RadioGroupField = _interopRequireDefault(require("./fields/RadioGroupField"));

var _SliderLogarithmic = _interopRequireDefault(require("./fields/SliderLogarithmic"));

var _SubmitButton = _interopRequireDefault(require("./fields/SubmitButton"));

var _SwitchField = _interopRequireDefault(require("./fields/SwitchField"));

var _TextField = _interopRequireDefault(require("./fields/TextField"));

var _requiredValidator = require("./validators/requiredValidator");

var _lengthValidator = _interopRequireDefault(require("./validators/lengthValidator"));

// import AcceptmentField from './fields/AcceptmentField';
// import AutocompleteField from './fields/AutocompleteField';
// import EmailField from './fields/EmailField';
// import PhoneField from './fields/PhoneField';
// import SelectField from './fields/SelectField';
// import REGIONS from '../../enums/regions';
var DADATA_ADDRESS_FLAT_REGEXP = /(.*?)\s*, кв (\d+(?:[/-]\d+)?)?$/;
var GENDERS = [{
  value: 'm',
  label: 'Мужской'
}, {
  value: 'f',
  label: 'Женский'
}];

function validateByLength(len) {
  return function (value) {
    return (0, _lengthValidator["default"])(value, len);
  };
}

var _default = {
  title: 'FormLanding',
  decorators: [(0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])]
};
exports["default"] = _default;

function CreditAmountSlider() {
  return /*#__PURE__*/_react["default"].createElement(_FormLanding["default"], {
    onChangeFields: (0, _addonActions.action)('onChangeFields'),
    onSubmit: (0, _addonActions.action)('onSubmit')
  }, /*#__PURE__*/_react["default"].createElement(_SliderLogarithmic["default"], {
    name: 'sum',
    label: 'Сумма кредита',
    min: 150000,
    max: 30000000
  }), /*#__PURE__*/_react["default"].createElement(_SubmitButton["default"] // classes={{ container: 'styles.buttonWrapper' }}
  , null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"));
}

function DadataFields() {
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
  }), /*#__PURE__*/_react["default"].createElement(_SubmitButton["default"], null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"));
}

function FormWrapper() {
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
    validate: _requiredValidator.requiredValidator
  }), /*#__PURE__*/_react["default"].createElement(_SubmitButton["default"], null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"));
}

function FormPassport() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isChangedCredentials = _useState2[0],
      setIsChangedCredentials = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isDifferentAddress = _useState4[0],
      setIsDifferentAddress = _useState4[1];

  var refForm = (0, _react.useRef)(null);
  var onChangeFields = {
    changedCredentials: function changedCredentials(fieldData) {
      var value = fieldData.value;
      refForm.current.setField('oldFio', {
        isRequired: value
      });
      setIsChangedCredentials(value);
    },
    differentAddress: function differentAddress(fieldData) {
      var value = fieldData.value;
      refForm.current.setField('lifeAddress', {
        isRequired: !value
      });
      setIsDifferentAddress(!value);
    }
  };

  function onSubmit(values) {
    console.log('values', values);
  }

  return /*#__PURE__*/_react["default"].createElement(_FormLanding["default"], {
    onSubmit: onSubmit,
    onChangeFields: onChangeFields,
    ref: refForm
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "\u041F\u0430\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "\u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
    name: "birthPlace",
    helperText: "\u0412 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0438, \u043A\u0430\u043A \u0432 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0435",
    validate: _requiredValidator.requiredValidator,
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6,
    sm: 4
  }, /*#__PURE__*/_react["default"].createElement(_MaskedField["default"], {
    label: "\u0421\u0435\u0440\u0438\u044F",
    name: "passportSeries",
    mask: "0000",
    defaultValue: "",
    validate: validateByLength(4)
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6,
    sm: 4
  }, /*#__PURE__*/_react["default"].createElement(_MaskedField["default"], {
    label: "\u041D\u043E\u043C\u0435\u0440",
    name: "passportNumber",
    mask: "000000",
    defaultValue: "",
    validate: validateByLength(6),
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sm: 4,
    className: "hide-xs"
  }, "\xA0"), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react["default"].createElement(_MaskedField["default"], {
    label: "\u041A\u043E\u0434",
    name: "passportCode",
    mask: "000-000",
    defaultValue: "",
    validate: validateByLength(7),
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D",
    name: "passportOrgan",
    defaultValue: "",
    validate: _requiredValidator.requiredValidator,
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_DateField["default"], {
    label: "\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438",
    name: "passportDate",
    defaultValue: "",
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_RadioGroupField["default"], {
    items: GENDERS,
    label: "\u0412\u0430\u0448 \u043F\u043E\u043B:",
    name: "gender",
    defaultValue: "m"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_SwitchField["default"], {
    label: "\u042F \u043C\u0435\u043D\u044F\u043B \u0424\u0430\u043C\u0438\u043B\u0438\u044E, \u0418\u043C\u044F \u0438\u043B\u0438 \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E ",
    name: "changedCredentials",
    defaultValue: false,
    validateOnBlur: false
  })), isChangedCredentials && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_DadataFio["default"], {
    label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",
    name: "oldFio",
    helperText: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u0424\u0418\u041E"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_DadataAddressFlat["default"], {
    name: "registrationAddress",
    incomingValue: "",
    regexp: DADATA_ADDRESS_FLAT_REGEXP
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "\u0410\u0434\u0440\u0435\u0441 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_CheckboxField["default"], {
    name: "differentAddress",
    label: "\u0421\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",
    color: "primary",
    defaultValue: !isDifferentAddress,
    validateOnBlur: false
  })), isDifferentAddress && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_DadataAddressFlat["default"], {
    name: "lifeAddress",
    incomingValue: "",
    regexp: DADATA_ADDRESS_FLAT_REGEXP
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(_SubmitButton["default"], null, "\u0414\u0430\u043B\u0435\u0435"))));
}