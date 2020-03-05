"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = exports.FormContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormContext = _react["default"].createContext({});

exports.FormContext = FormContext;

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "registerField", function (_ref) {
      var fieldKey = _ref.fieldKey,
          value = _ref.value,
          validate = _ref.validate,
          helperText = _ref.helperText,
          isRequired = _ref.isRequired;

      _this.setState(function (state) {
        return {
          fields: _objectSpread({}, state.fields, _defineProperty({}, fieldKey, {
            value: value,
            validate: validate,
            touched: false,
            helperText: helperText,
            isRequired: isRequired,
            initialHelperText: helperText //needs to store original helperText value and set it when setFieldsValue calls

          }))
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setField", function (fieldKey, data) {
      var newField = _objectSpread({}, _this.state.fields[fieldKey], {}, data);

      _this.setState(function (state) {
        return {
          fields: _objectSpread({}, state.fields, _defineProperty({}, fieldKey, newField))
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setFields", function (updates) {
      _this.setState(function (prevState) {
        var prevFields = _objectSpread({}, prevState.fields);

        var nextFields = _objectSpread({}, prevFields);

        Object.keys(updates).forEach(function (fieldKey) {
          var prevField = prevFields[fieldKey];
          var nextField = updates[fieldKey];

          if ('value' in nextField) {
            nextField.error = prevField.validate(nextField.value);
            nextField.helperText = (0, _helpers.getHelperTextFromError)(nextField.error, prevField.initialHelperText);
          }

          nextFields[fieldKey] = _objectSpread({}, prevField, {}, nextField);
        });
        return {
          fields: nextFields
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldsValue", function () {
      return Object.keys(_this.state.fields).reduce(function (acc, fieldKey) {
        acc[fieldKey] = _this.state.fields[fieldKey].value;
        return acc;
      }, {});
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref2) {
      var fieldKey = _ref2.fieldKey,
          updates = _objectWithoutProperties(_ref2, ["fieldKey"]);

      var prevField = _this.state.fields[fieldKey];

      var nextField = _objectSpread({}, prevField, {}, updates, {
        touched: true
      });

      var nextFields = _objectSpread({}, _this.state.fields, _defineProperty({}, fieldKey, nextField));

      _this.setState(function (state) {
        var nextInvalidFields = new Set(state.invalidFields);
        if (updates.error) nextInvalidFields.add(fieldKey);else nextInvalidFields["delete"](fieldKey);
        return {
          fields: nextFields,
          invalidFields: nextInvalidFields,
          valid: !nextInvalidFields.size
        };
      });

      var onChangeFields = _this.props.onChangeFields;

      if (onChangeFields) {
        if (typeof onChangeFields === 'function') {
          onChangeFields(nextFields, fieldKey);
        } else {
          var onChangeCallback = onChangeFields[fieldKey];
          onChangeCallback && onChangeCallback(nextField);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function () {
      var fields = _this.state.fields;

      var _getRequiredFields = (0, _helpers.getRequiredFields)(fields),
          requiredFields = _getRequiredFields.requiredFields;

      _this.toggleSubmitting(true);

      var _checkUnTouchedFields = (0, _helpers.checkUnTouchedFields)(requiredFields),
          fieldsToSubmit = _checkUnTouchedFields.fieldsToSubmit,
          fieldsWithError = _checkUnTouchedFields.fieldsWithError,
          validForm = _checkUnTouchedFields.validForm;

      var nextFields = _objectSpread({}, _this.state.fields);

      Object.keys(_this.state.fields).forEach(function (fieldKey) {
        var stateField = _this.state.fields[fieldKey];

        if (fieldKey in fieldsWithError) {
          nextFields[fieldKey] = _objectSpread({}, fieldsWithError[fieldKey]);
        } else {
          nextFields[fieldKey] = _objectSpread({}, stateField, {
            error: false,
            helperText: stateField.initialHelperText
          });
        }
      });

      if (!validForm) {
        return _this.setState({
          valid: validForm,
          fields: nextFields,
          submitting: false
        });
      }

      var promise = _this.props.onSubmit(fieldsToSubmit);

      return promise && promise["finally"](function () {
        return _this.toggleSubmitting(false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSubmitting", function (submitting) {
      return _this.setState({
        submitting: submitting
      });
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      fields: {},
      onChange: _this.onChange,
      onSubmit: _this.onSubmit,
      submitting: _this.props.submitting,
      valid: true,
      registerField: _this.registerField,
      onChangeFields: _this.props.onChangeFields,
      invalidFields: new Set()
    });

    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(FormContext.Provider, {
        value: this.state
      }, this.props.children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var nextState = {};

      if (props.submitting !== state.mirroredSubmitting) {
        nextState.submitting = props.submitting;
        nextState.mirroredSubmitting = props.submitting;
      }

      if (props.errors !== state.mirroredErrors) {
        nextState.fields = (0, _helpers.updateFieldsErrors)(props.errors, state.fields);
        nextState.mirroredErrors = props.errors;
      }

      if (props.values !== state.mirroredValues) {
        nextState.fields = (0, _helpers.updateFieldsValues)(props.values, nextState.fields || state.fields);
        nextState.mirroredValues = props.values;
      }

      return nextState;
    }
  }]);

  return Form;
}(_react["default"].Component);

exports.Form = Form;

_defineProperty(Form, "propTypes", {
  submitting: _propTypes["default"].bool,
  onChangeFields: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object])
});

_defineProperty(Form, "defaultProps", {
  submitting: false,
  onChangeFields: undefined
});