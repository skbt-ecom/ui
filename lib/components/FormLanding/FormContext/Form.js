"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.Form = exports.FormContext = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/values"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; (0, _forEach["default"])(_context5 = ownKeys(Object(source), true)).call(_context5, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context6; (0, _forEach["default"])(_context6 = ownKeys(Object(source))).call(_context6, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

var FormContext = /*#__PURE__*/_react["default"].createContext({});

exports.FormContext = FormContext;

var Form = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form() {
    var _context;

    var _this;

    (0, _classCallCheck2["default"])(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, (0, _concat["default"])(_context = [this]).call(_context, args));
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "registerField", function (_ref) {
      var fieldKey = _ref.fieldKey,
          value = _ref.value,
          validate = _ref.validate,
          helperText = _ref.helperText,
          isRequired = _ref.isRequired;

      _this.setState(function (state) {
        return {
          fields: _objectSpread(_objectSpread({}, state.fields), {}, (0, _defineProperty3["default"])({}, fieldKey, {
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
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "setField", function (fieldKey, data) {
      var newField = _objectSpread(_objectSpread({}, _this.state.fields[fieldKey]), data);

      _this.setState(function (state) {
        return {
          fields: _objectSpread(_objectSpread({}, state.fields), {}, (0, _defineProperty3["default"])({}, fieldKey, newField))
        };
      });
    });
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "setFields", function (updates) {
      _this.setState(function (prevState) {
        var _context2;

        var prevFields = _objectSpread({}, prevState.fields);

        var nextFields = _objectSpread({}, prevFields);

        (0, _forEach["default"])(_context2 = (0, _keys["default"])(updates)).call(_context2, function (fieldKey) {
          var prevField = prevFields[fieldKey];
          var nextField = updates[fieldKey];

          if ('value' in nextField) {
            nextField.error = prevField.validate(nextField.value);
            nextField.helperText = (0, _helpers.getHelperTextFromError)(nextField.error, prevField.initialHelperText);
          }

          nextFields[fieldKey] = _objectSpread(_objectSpread({}, prevField), nextField);
        });
        return {
          fields: nextFields
        };
      });
    });
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "getFieldsValue", function (fieldKey) {
      var _context3;

      var fields = _this.state.fields;

      if (fieldKey) {
        return fields[fieldKey] && fields[fieldKey].value;
      }

      var values = {};
      (0, _forEach["default"])(_context3 = (0, _keys["default"])(fields)).call(_context3, function (name) {
        return values[name] = fields[name].value;
      });
      return values;
    });
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (_ref2) {
      var fieldKey = _ref2.fieldKey,
          updates = (0, _objectWithoutProperties2["default"])(_ref2, ["fieldKey"]);
      var prevField = _this.state.fields[fieldKey];

      var nextField = _objectSpread(_objectSpread(_objectSpread({}, prevField), updates), {}, {
        touched: true
      });

      var nextFields = _objectSpread(_objectSpread({}, _this.state.fields), {}, (0, _defineProperty3["default"])({}, fieldKey, nextField));

      _this.setState(function (state) {
        var nextInvalidFields = new _set["default"](state.invalidFields);
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
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "onSubmit", function () {
      var _context4;

      var fields = _this.state.fields;

      var _getRequiredFields = (0, _helpers.getRequiredFields)(fields),
          requiredFields = _getRequiredFields.requiredFields;

      _this.toggleSubmitting(true);

      var _checkUnTouchedFields = (0, _helpers.checkUnTouchedFields)(requiredFields),
          fieldsToSubmit = _checkUnTouchedFields.fieldsToSubmit,
          fieldsWithError = _checkUnTouchedFields.fieldsWithError,
          validForm = _checkUnTouchedFields.validForm;

      var nextFields = _objectSpread({}, _this.state.fields);

      (0, _forEach["default"])(_context4 = (0, _keys["default"])(_this.state.fields)).call(_context4, function (fieldKey) {
        var stateField = _this.state.fields[fieldKey];

        if (fieldKey in fieldsWithError) {
          nextFields[fieldKey] = _objectSpread({}, fieldsWithError[fieldKey]);
        } else {
          nextFields[fieldKey] = _objectSpread(_objectSpread({}, stateField), {}, {
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
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "toggleSubmitting", function (submitting) {
      return _this.setState({
        submitting: submitting
      });
    });
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      fields: {},
      onChange: _this.onChange,
      onSubmit: _this.onSubmit,
      submitting: _this.props.submitting,
      valid: true,
      registerField: _this.registerField,
      onChangeFields: _this.props.onChangeFields,
      invalidFields: new _set["default"]()
    });
    return _this;
  }

  (0, _createClass2["default"])(Form, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(FormContext.Provider, {
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

      if ((0, _values["default"])(props) !== state.mirroredValues) {
        nextState.fields = (0, _helpers.updateFieldsValues)((0, _values["default"])(props), nextState.fields || state.fields);
        nextState.mirroredValues = (0, _values["default"])(props);
      }

      return nextState;
    }
  }]);
  return Form;
}(_react["default"].Component);

exports.Form = Form;
(0, _defineProperty3["default"])(Form, "propTypes", {
  submitting: _propTypes["default"].bool,
  onChangeFields: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object])
});
(0, _defineProperty3["default"])(Form, "defaultProps", {
  submitting: false,
  onChangeFields: undefined
});