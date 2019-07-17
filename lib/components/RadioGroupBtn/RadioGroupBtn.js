"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioBtn = _interopRequireDefault(require("./RadioBtn"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RadioGroupBtn = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var _useState = (0, _react.useState)(props.value || props.items[0].value),
      _useState2 = _slicedToArray(_useState, 2),
      selectedValue = _useState2[0],
      setSelectedValue = _useState2[1];

  var onChange = function onChange(e) {
    var value = props.numberType ? Number(e.target.value) : e.target.value;
    setSelectedValue(value);
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
      selectedValue: selectedValue
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