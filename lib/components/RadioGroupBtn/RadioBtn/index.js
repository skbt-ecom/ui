"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

var RadioBtn = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);
  var item = props.item,
      name = props.name,
      selectedValue = props.selectedValue;
  return _react["default"].createElement("label", {
    className: classes.label
  }, _react["default"].createElement("input", {
    type: "radio",
    name: name,
    className: classes.input,
    onChange: props.onChange,
    value: item.value,
    checked: item.value === selectedValue
  }), _react["default"].createElement("div", {
    className: classes.box
  }, _react["default"].createElement("span", null, item.label)));
});

RadioBtn.propTypes = {
  item: _propTypes["default"].object.isRequired,
  name: _propTypes["default"].string.isRequired,
  selectedValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = RadioBtn;
exports["default"] = _default;