"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _withSpaceForHelperTxt = _interopRequireDefault(require("../HOCs/withSpaceForHelperTxt"));

var _styles = _interopRequireDefault(require("./styles"));

var SelectComponent = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
      value = props.value,
      fullWidth = props.fullWidth,
      label = props.label;
  return _react["default"].createElement(_FormControl["default"], {
    variant: "outlined",
    className: classes.formControl,
    error: error,
    fullWidth: fullWidth
  }, _react["default"].createElement(_InputLabel["default"], {
    ref: inputLabel,
    htmlFor: name
  }, label), _react["default"].createElement(_Select["default"], {
    value: value,
    onChange: handleChange,
    name: name,
    input: _react["default"].createElement(_OutlinedInput["default"], {
      labelWidth: labelWidth,
      id: name
    })
  }, (0, _map["default"])(items).call(items, function (_ref, i) {
    var value = _ref.value,
        label = _ref.label;
    return _react["default"].createElement(_MenuItem["default"], {
      key: i,
      value: value
    }, label);
  })), helperText && _react["default"].createElement(_FormHelperText["default"], null, helperText));
});

SelectComponent.defaultProps = {
  items: [{
    value: '',
    label: ''
  }]
};

var _default = (0, _withSpaceForHelperTxt["default"])(SelectComponent);

exports["default"] = _default;