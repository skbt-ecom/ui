"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../../../Checkbox/Checkbox"));

var _Field = require("../../FormContext/Field");

var _Link = _interopRequireDefault(require("../../../Link"));

var _styles = _interopRequireDefault(require("./styles"));

var _styles2 = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Acceptment = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var onChange = function onChange(e) {
    props.onChange(e.target.checked);
  };

  return _react["default"].createElement(_Checkbox["default"], _extends({
    color: "primary"
  }, props, {
    classes: {
      labelClasses: {
        label: classes.personalLabel
      },
      helperTextClasses: {
        root: classes.helperTextRoot
      }
    },
    label: _react["default"].createElement(_react["default"].Fragment, null, "\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430\xA0\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\xA0\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438\xA0\u0441\xA0", _react["default"].createElement(_Link["default"], {
      href: "https://app.sovcombank.ru/policy/",
      target: "_blank",
      rel: "noopener noreferrer",
      underline: 'always'
    }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438")),
    onChange: onChange,
    checked: props.value
  }));
});

var WrappedField = function WrappedField(props) {
  var classes = (0, _styles2["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.fieldWrapperAcceptment
  }, _react["default"].createElement(_Field.Field, props));
};

WrappedField.displayName = 'Acceptment';
WrappedField.defaultProps = {
  component: Acceptment,
  defaultValue: true,
  validateOnBlur: false,
  validate: function validate(value) {
    return value ? null : 'Необходимо согласие с условиями';
  }
};
var _default = WrappedField;
exports["default"] = _default;