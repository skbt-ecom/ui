"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));

var _styles = _interopRequireDefault(require("./styles"));

var Answer = function Answer(props) {
  var classes = (0, _styles["default"])(props);
  return /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
    classes: {
      root: classes.root
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: classes.text
  }, props.children));
};

var _default = Answer;
exports["default"] = _default;