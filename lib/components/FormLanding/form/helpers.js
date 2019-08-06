"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHelperTextFromError = exports.getErrorProp = exports.updateFieldsValues = exports.updateFieldsErrors = exports.checkUnTouchedFields = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var checkUnTouchedFields = function checkUnTouchedFields(fields) {
  var fieldsToSubmit = {};
  var fieldsWithError = {};
  var validForm = true;
  Object.keys(fields).forEach(function (fieldKey) {
    var field = fields[fieldKey];
    fieldsToSubmit[fieldKey] = field.value;

    if (!field.touched) {
      var error = field.validate(field.value);

      if (error) {
        validForm = false;
        fieldsWithError[fieldKey] = _objectSpread({}, field, {
          error: error,
          helperText: error
        });
      }
    }

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
    nextFields[fieldKey] = _objectSpread({}, fields[fieldKey], {
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
    nextFields[fieldKey] = _objectSpread({}, fields[fieldKey], {
      value: values[fieldKey]
    });
  });
  return nextFields;
};

exports.updateFieldsValues = updateFieldsValues;

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
    return Object.keys(error).length ? _objectSpread({}, prevHelperText, error) : prevHelperText;
  }

  return error ? error : prevHelperText;
};

exports.getHelperTextFromError = getHelperTextFromError;