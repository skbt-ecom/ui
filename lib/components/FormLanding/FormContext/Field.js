"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Field = void 0;

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Form = require("./Form");

var _helpers = require("./helpers");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

var Field = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Field, _React$PureComponent);

  var _super = _createSuper(Field);

  function Field() {
    var _context;

    var _this;

    (0, _classCallCheck2["default"])(this, Field);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, (0, _concat["default"])(_context = [this]).call(_context, args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_prevValue", undefined);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "initialValue", _this.props.value || _this.props.defaultValue);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (value) {
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
        value: value,
        isRequired: _this.props.isRequired
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onValidateItem", function (props) {
      var value = props.value,
          isRequired = props.isRequired; // return when value has not been changed
      // if (value === this._prevValue) {
      //   return;
      // }

      _this._prevValue = value;
      var error = isRequired ? _this.props.validate(value) : false;
      var helperText = (0, _helpers.getHelperTextFromError)(error, _this.props.helperText);

      _this.context.onChange({
        fieldKey: _this.props.name,
        value: value,
        error: error,
        helperText: helperText
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur", function () {
      _this.onValidateItem({
        fieldKey: _this.props.name,
        value: _this.context.fields[_this.props.name].value,
        isRequired: _this.context.fields[_this.props.name].isRequired
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var field = this.context.fields[this.props.name] || {};
      this.context.registerField({
        fieldKey: this.props.name,
        value: field.value || this.initialValue,
        validate: this.props.validate,
        helperText: this.props.helperText,
        isRequired: this.props.isRequired
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
          isRequired = _this$props.isRequired,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["validate", "value", "component", "defaultValue", "validateOnBlur", "isRequired"]);

      if (!this.context.fields) {
        throw new Error('The Field must be inside Form');
      }

      var field = this.context.fields[props.name] || {
        value: this.initialValue
      };
      return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, props, {
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
(0, _defineProperty2["default"])(Field, "contextType", _Form.FormContext);
(0, _defineProperty2["default"])(Field, "propTypes", {
  validate: _propTypes["default"].func,
  name: _propTypes["default"].string.isRequired,
  validateOnBlur: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Field, "defaultProps", {
  validate: function validate() {
    return undefined;
  },
  validateOnBlur: true,
  isRequired: true
});