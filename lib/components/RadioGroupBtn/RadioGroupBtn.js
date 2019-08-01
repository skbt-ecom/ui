"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioBtn = _interopRequireDefault(require("./RadioBtn"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RadioGroupBtn = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var onChange = function onChange(e) {
    var value = props.numberType ? Number(e.target.value) : e.target.value;
    props.onChange(value);
  };

  var items = props.items,
      name = props.name;
  return _react["default"].createElement("div", {
    className: classes.container
  }, items.map(function (item, i) {
    return _react["default"].createElement(_RadioBtn["default"], {
      key: i,
      item: item,
      name: name,
      onChange: onChange,
      selectedValue: props.value
    });
  }));
});

RadioGroupBtn.defaultProps = {
  items: [{
    value: '',
    label: ''
  }],
  onChange: function onChange() {
    return {};
  },
  numberType: false
};
RadioGroupBtn.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  name: _propTypes["default"].string.isRequired,
  items: _propTypes["default"].array.isRequired,
  numberType: _propTypes["default"].bool
};
var _default = RadioGroupBtn;
exports["default"] = _default;