"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Form = require("./Form");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Field =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Field, _React$PureComponent);

  function Field() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Field);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Field)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_prevValue", undefined);

    _defineProperty(_assertThisInitialized(_this), "initialValue", _this.props.value || _this.props.defaultValue);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      if (_this.props.validateOnBlur) {
        // reset error state from field
        return _this.context.onChange({
          fieldKey: _this.props.name,
          value: value,
          error: false,
          helperText: _this.props.helperText
        });
      }

      return _this.onValidateItem({
        fieldKey: _this.props.name,
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onValidateItem", function (props) {
      var value = props.value; // return when value has not been changed

      if (value === _this._prevValue) {
        return;
      }

      _this._prevValue = value;

      var error = _this.props.validate(value);

      var helperText = (0, _helpers.getHelperTextFromError)(error, _this.props.helperText);

      _this.context.onChange({
        fieldKey: _this.props.name,
        value: value,
        error: error,
        helperText: helperText
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      _this.onValidateItem({
        fieldKey: _this.props.name,
        value: _this.context.fields[_this.props.name].value
      });
    });

    return _this;
  }

  _createClass(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var field = this.context.fields[this.props.name] || {};
      this.context.registerField({
        fieldKey: this.props.name,
        value: field.value || this.initialValue,
        validate: this.props.validate,
        helperText: this.props.helperText
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          validate = _this$props.validate,
          value = _this$props.value,
          Component = _this$props.component,
          defaultValue = _this$props.defaultValue,
          validateOnBlur = _this$props.validateOnBlur,
          props = _objectWithoutProperties(_this$props, ["validate", "value", "component", "defaultValue", "validateOnBlur"]);

      if (!this.context.fields) {
        throw new Error('The Field must be inside Form');
      }

      var field = this.context.fields[props.name] || {
        value: this.initialValue
      };
      return _react["default"].createElement(Component, _extends({}, props, {
        value: field.value,
        error: (0, _helpers.getErrorProp)(field.error),
        helperText: field.helperText,
        onChange: this.onChange,
        onBlur: validateOnBlur ? this.onBlur : this.props.onBlur
      }));
    }
  }]);

  return Field;
}(_react["default"].PureComponent);

exports.Field = Field;

_defineProperty(Field, "contextType", _Form.FormContext);

_defineProperty(Field, "propTypes", {
  validate: _propTypes["default"].func,
  name: _propTypes["default"].string.isRequired,
  validateOnBlur: _propTypes["default"].bool
});

_defineProperty(Field, "defaultProps", {
  validate: function validate() {
    return undefined;
  },
  validateOnBlur: true
});