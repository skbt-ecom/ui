"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _styles = _interopRequireDefault(require("./styles"));

var Question = function Question(props) {
  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement(_ExpansionPanelSummary["default"], {
    expandIcon: _react["default"].createElement(_ExpandMore["default"], null),
    "aria-controls": "panel1a-content",
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      expandIcon: classes.expandIcon
    }
  }, _react["default"].createElement("p", {
    className: classes.text
  }, props.children));
};

var _default = Question;
exports["default"] = _default;