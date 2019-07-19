"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RadioGroupField = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);
  var label = props.label,
      items = props.items,
      name = props.name,
      value = props.value;

  var handleChange = function handleChange(e) {
    var value = e.target.value;
    props.onChange(value);
  };

  return _react["default"].createElement(_FormControl["default"], {
    component: "fieldset",
    className: classes.formControl,
    fullWidth: true
  }, label && _react["default"].createElement(_FormLabel["default"], {
    component: "legend",
    className: classes.formLabel
  }, label), _react["default"].createElement(_RadioGroup["default"], {
    "aria-label": label,
    name: name,
    className: classes.group,
    value: value,
    onChange: handleChange
  }, items.map(function (_ref, i) {
    var value = _ref.value,
        label = _ref.label;
    return _react["default"].createElement(_FormControlLabel["default"], {
      key: i,
      value: value,
      control: _react["default"].createElement(_Radio["default"], {
        color: "primary"
      }),
      label: label
    });
  })));
});

RadioGroupField.defaultProps = {
  direction: 'row'
};
var _default = RadioGroupField;
exports["default"] = _default;