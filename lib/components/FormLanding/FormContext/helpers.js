"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.getHelperTextFromError = exports.getErrorProp = exports.checkOptionalKeysInInvalidFields = exports.getRequiredFields = exports.updateFieldsValues = exports.updateFieldsErrors = exports.checkUnTouchedFields = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _some = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/some"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context6; (0, _forEach["default"])(_context6 = ownKeys(Object(source), true)).call(_context6, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context7; (0, _forEach["default"])(_context7 = ownKeys(Object(source))).call(_context7, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var checkUnTouchedFields = function checkUnTouchedFields(fields) {
  var _context;

  var fieldsToSubmit = {};
  var fieldsWithError = {};
  var validForm = true;
  (0, _forEach["default"])(_context = (0, _keys["default"])(fields)).call(_context, function (fieldKey) {
    var field = fields[fieldKey];
    fieldsToSubmit[fieldKey] = field.value; // if (!field.touched) {

    var error = field.validate(field.value);

    if (error) {
      validForm = false;
      fieldsWithError[fieldKey] = _objectSpread({}, field, {
        error: error,
        helperText: error
      });
    } // }


    return;
  });
  return {
    fieldsToSubmit: fieldsToSubmit,
    fieldsWithError: fieldsWithError,
    validForm: validForm
  };
};

exports.checkUnTouchedFields = checkUnTouchedFields;

var updateFieldsErrors = function updateFieldsErrors(errors, fields) {
  var _context2;

  var nextFields = _objectSpread({}, fields);

  (0, _forEach["default"])(_context2 = (0, _keys["default"])(errors)).call(_context2, function (fieldKey) {
    nextFields[fieldKey] = _objectSpread({}, fields[fieldKey], {
      error: !!errors[fieldKey],
      helperText: errors[fieldKey]
    });
  });
  return nextFields;
};

exports.updateFieldsErrors = updateFieldsErrors;

var updateFieldsValues = function updateFieldsValues(values, fields) {
  var _context3;

  var nextFields = _objectSpread({}, fields);

  (0, _forEach["default"])(_context3 = (0, _keys["default"])(values)).call(_context3, function (fieldKey) {
    nextFields[fieldKey] = _objectSpread({}, fields[fieldKey], {
      value: values[fieldKey]
    });
  });
  return nextFields;
};

exports.updateFieldsValues = updateFieldsValues;

var getRequiredFields = function getRequiredFields(fields) {
  var _context4;

  var requiredFields = {};
  var optionalKeys = [];
  (0, _forEach["default"])(_context4 = (0, _keys["default"])(fields)).call(_context4, function (fieldKey) {
    var field = fields[fieldKey];

    if (field.isRequired) {
      requiredFields[fieldKey] = field;
    } else {
      optionalKeys.push(fieldKey);
    }
  });
  return {
    requiredFields: requiredFields,
    optionalKeys: optionalKeys
  };
};

exports.getRequiredFields = getRequiredFields;

var checkOptionalKeysInInvalidFields = function checkOptionalKeysInInvalidFields(optionalKeys, invalidFields) {
  return (0, _some["default"])(optionalKeys).call(optionalKeys, function (key) {
    return invalidFields.has(key);
  });
};

exports.checkOptionalKeysInInvalidFields = checkOptionalKeysInInvalidFields;

var getFieldErrors = function getFieldErrors(errorsObj) {
  var _context5;

  return (0, _reduce["default"])(_context5 = (0, _keys["default"])(errorsObj)).call(_context5, function (prev, cur) {
    prev[cur] = Boolean(errorsObj[cur]);
    return prev;
  }, {});
};

var getErrorProp = function getErrorProp(fieldError) {
  return (0, _typeof2["default"])(fieldError) === 'object' && fieldError !== null ? getFieldErrors(fieldError) : Boolean(fieldError);
};

exports.getErrorProp = getErrorProp;

var getHelperTextFromError = function getHelperTextFromError(error) {
  var prevHelperText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if ((0, _typeof2["default"])(error) === 'object' && error !== null) {
    return (0, _keys["default"])(error).length ? _objectSpread({}, prevHelperText, {}, error) : prevHelperText;
  }

  return error ? error : prevHelperText;
};

exports.getHelperTextFromError = getHelperTextFromError;