"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../../../Checkbox/Checkbox"));

var _Field = require("../../FormContext/Field");

var _Link = _interopRequireDefault(require("../../../Link"));

var _styles = _interopRequireDefault(require("./styles"));

var _styles2 = _interopRequireDefault(require("../styles"));

var Acceptment = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var onChange = function onChange(e) {
    props.onChange(e.target.checked);
  };

  return _react["default"].createElement(_Checkbox["default"], (0, _extends2["default"])({
    color: "primary"
  }, props, {
    classes: {
      labelClasses: {
        label: classes.labelLabel,
        root: classes.labelRoot
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

var WrappedField = function WrappedField(_ref) {
  var classsesComponent = _ref.classsesComponent,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["classsesComponent"]);
  var classes = (0, _styles2["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.fieldWrapperAcceptment
  }, _react["default"].createElement(_Field.Field, (0, _extends2["default"])({}, props, {
    classes: classsesComponent
  })));
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