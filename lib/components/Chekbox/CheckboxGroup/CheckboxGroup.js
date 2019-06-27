"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckboxComponent = function CheckboxComponent(props) {
  return _react["default"].createElement(_FormControlLabel["default"], {
    control: _react["default"].createElement(_Checkbox["default"], {
      checked: true // onChange={handleChange('checkedA')}
      ,
      value: "checkedA"
    }),
    label: "Secondary"
  });
};

var _default = CheckboxComponent;
exports["default"] = _default;