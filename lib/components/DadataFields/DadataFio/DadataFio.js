"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _DadataAutocomplete = _interopRequireDefault(require("../DadataAutocomplete"));

var FioDadata = function FioDadata(props) {
  return /*#__PURE__*/_react["default"].createElement(_DadataAutocomplete["default"], (0, _extends2["default"])({}, props, {
    type: 'fio' // onBlur={props.onBlur}
    // incameValue={props.incameValue}
    // error={props.error}
    // helperText={props.helperText}

  }));
};

var _default = _react["default"].memo(FioDadata);

exports["default"] = _default;