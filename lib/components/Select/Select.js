"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SelectComponent = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      labelWidth = _useState2[0],
      setLabelWidth = _useState2[1];

  var inputLabel = _react["default"].useRef(null);

  (0, _react.useLayoutEffect)(function () {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  var handleChange = function handleChange(e) {
    props.onChange(e);
  };

  var helperText = props.helperText,
      error = props.error,
      items = props.items,
      name = props.name,
      value = props.value;
  return _react["default"].createElement(_FormControl["default"], {
    variant: "outlined",
    className: classes.formControl,
    error: error
  }, _react["default"].createElement(_InputLabel["default"], {
    ref: inputLabel,
    htmlFor: name
  }, "Name"), _react["default"].createElement(_Select["default"], {
    value: value,
    onChange: handleChange,
    name: name,
    input: _react["default"].createElement(_OutlinedInput["default"], {
      labelWidth: labelWidth,
      id: name
    })
  }, items.map(function (_ref, i) {
    var value = _ref.value,
        label = _ref.label;
    return _react["default"].createElement(_MenuItem["default"], {
      key: i,
      value: value
    }, label);
  })), helperText && _react["default"].createElement(_FormHelperText["default"], null, "Error"));
});

SelectComponent.defaultProps = {
  items: [{
    value: '',
    label: ''
  }]
};
var _default = SelectComponent;
exports["default"] = _default;