"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _styles = _interopRequireDefault(require("./styles"));

var Question = function Question(props) {
  var classes = (0, _styles["default"])(props);
  return /*#__PURE__*/_react["default"].createElement(_AccordionSummary["default"], {
    expandIcon: /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null),
    "aria-controls": "panel1a-content",
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      expandIcon: classes.expandIcon
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h4",
    className: classes.text
  }, props.children));
};

var _default = Question;
exports["default"] = _default;