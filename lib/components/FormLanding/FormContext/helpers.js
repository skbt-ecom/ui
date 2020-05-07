"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHelperTextFromError = exports.getErrorProp = exports.checkOptionalKeysInInvalidFields = exports.getRequiredFields = exports.updateFieldsValues = exports.updateFieldsErrors = exports.checkUnTouchedFields = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var checkUnTouchedFields = function checkUnTouchedFields(fields) {
  var fieldsToSubmit = {};
  var fieldsWithError = {};
  var validForm = true;
  Object.keys(fields).forEach(function (fieldKey) {
    var field = fields[fieldKey];
    fieldsToSubmit[fieldKey] = field.value; // if (!field.touched) {

    var error = field.validate(field.value);

    if (error) {
      validForm = false;
      fieldsWithError[fieldKey] = _objectSpread(_objectSpread({}, field), {}, {
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
  var nextFields = _objectSpread({}, fields);

  Object.keys(errors).forEach(function (fieldKey) {
    nextFields[fieldKey] = _objectSpread(_objectSpread({}, fields[fieldKey]), {}, {
      error: !!errors[fieldKey],
      helperText: errors[fieldKey]
    });
  });
  return nextFields;
};

exports.updateFieldsErrors = updateFieldsErrors;

var updateFieldsValues = function updateFieldsValues(values, fields) {
  var nextFields = _objectSpread({}, fields);

  Object.keys(values).forEach(function (fieldKey) {
    nextFields[fieldKey] = _objectSpread(_objectSpread({}, fields[fieldKey]), {}, {
      value: values[fieldKey]
    });
  });
  return nextFields;
};

exports.updateFieldsValues = updateFieldsValues;

var getRequiredFields = function getRequiredFields(fields) {
  var requiredFields = {};
  var optionalKeys = [];
  Object.keys(fields).forEach(function (fieldKey) {
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
  return optionalKeys.some(function (key) {
    return invalidFields.has(key);
  });
};

exports.checkOptionalKeysInInvalidFields = checkOptionalKeysInInvalidFields;

var getFieldErrors = function getFieldErrors(errorsObj) {
  return Object.keys(errorsObj).reduce(function (prev, cur) {
    prev[cur] = Boolean(errorsObj[cur]);
    return prev;
  }, {});
};

var getErrorProp = function getErrorProp(fieldError) {
  return _typeof(fieldError) === 'object' && fieldError !== null ? getFieldErrors(fieldError) : Boolean(fieldError);
};

exports.getErrorProp = getErrorProp;

var getHelperTextFromError = function getHelperTextFromError(error) {
  var prevHelperText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (_typeof(error) === 'object' && error !== null) {
    return Object.keys(error).length ? _objectSpread(_objectSpread({}, prevHelperText), error) : prevHelperText;
  }

  return error ? error : prevHelperText;
};

exports.getHelperTextFromError = getHelperTextFromError;