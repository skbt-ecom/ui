"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Slider = _interopRequireDefault(require("@material-ui/lab/Slider"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)({
  root: {
    width: 250
  },
  input: {
    width: 42
  }
});

var SliderComponent = function SliderComponent(props) {
  var classes = useStyles();

  var _React$useState = _react["default"].useState(30),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleSliderChange = function handleSliderChange(event, newValue) {
    setValue(newValue);
  };

  var handleInputChange = function handleInputChange(event) {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  var handleBlur = function handleBlur() {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: true
  }, _react["default"].createElement(_Slider["default"], {
    value: typeof value === 'number' ? value : 0,
    onChange: handleSliderChange,
    "aria-labelledby": "input-slider"
  })), _react["default"].createElement(_Grid["default"], {
    item: true
  }, _react["default"].createElement(_Input["default"], {
    className: classes.input,
    value: value,
    margin: "dense",
    onChange: handleInputChange,
    onBlur: handleBlur,
    inputProps: {
      step: 10,
      min: 0,
      max: 100,
      type: 'number',
      'aria-labelledby': 'input-slider'
    }
  }))));
};

var _default = SliderComponent;
exports["default"] = _default;