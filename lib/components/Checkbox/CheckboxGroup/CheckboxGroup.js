"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _findIndex = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find-index"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _styles = _interopRequireDefault(require("./styles"));

var renderCheckboxItem = function renderCheckboxItem(_ref) {
  var _ref$option = _ref.option,
      label = _ref$option.label,
      value = _ref$option.value,
      handleChange = _ref.handleChange,
      index = _ref.index,
      classes = _ref.classes,
      color = _ref.color,
      checked = _ref.checked;
  return _react["default"].createElement(_FormControlLabel["default"], {
    classes: {
      root: classes.checkboxFormControlLabelRoot
    },
    key: index,
    control: _react["default"].createElement(_Checkbox["default"], {
      onChange: handleChange(value),
      value: value,
      color: color,
      checked: checked
    }),
    label: label
  });
};

var CheckboxGroup = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])(props);
  var options = props.options,
      error = props.error,
      helperText = props.helperText,
      _props$formLabel = props.formLabel,
      formLabel = _props$formLabel === void 0 ? {} : _props$formLabel,
      color = props.color,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["options", "error", "helperText", "formLabel", "color"]);

  var _useState = (0, _react.useState)(props.checked || []),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      checkedOptions = _useState2[0],
      setCheckedOptions = _useState2[1];

  var isFirstRun = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    props.onChange(checkedOptions);
  }, [checkedOptions]);

  var handleChange = function handleChange(name) {
    return function (e) {
      if (e.target.checked) {
        setCheckedOptions(function (prevCheckedOptions) {
          var _context;

          return (0, _concat["default"])(_context = []).call(_context, (0, _toConsumableArray2["default"])(prevCheckedOptions), [name]);
        });
      } else {
        setCheckedOptions(function (prevCheckedOptions) {
          return (0, _filter["default"])(prevCheckedOptions).call(prevCheckedOptions, function (el) {
            return el !== name;
          });
        });
      }
    };
  };

  return _react["default"].createElement(_FormControl["default"], {
    error: error,
    component: "fieldset"
  }, formLabel.label && _react["default"].createElement(_FormLabel["default"], {
    component: "legend",
    className: formLabel.className
  }, formLabel.label), _react["default"].createElement(_FormGroup["default"], null, (0, _map["default"])(options).call(options, function (option, index) {
    return renderCheckboxItem({
      option: option,
      handleChange: handleChange,
      index: index,
      classes: classes,
      color: color,
      checked: (0, _findIndex["default"])(checkedOptions).call(checkedOptions, function (op) {
        return op === option.value;
      }) !== -1
    });
  })), helperText && _react["default"].createElement(_FormHelperText["default"], null, helperText));
});

var _default = CheckboxGroup;
exports["default"] = _default;