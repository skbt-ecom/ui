"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Stepper = _interopRequireDefault(require("@material-ui/core/Stepper"));

var _Step = _interopRequireDefault(require("@material-ui/core/Step"));

var _StepLabel = _interopRequireDefault(require("@material-ui/core/StepLabel"));

var _StepContent = _interopRequireDefault(require("@material-ui/core/StepContent"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function StepConnector(props) {
  return _react["default"].createElement("div", {
    className: props.className
  });
}

var StepperComponent = _react["default"].memo(function (props) {
  var classes = (0, _styles["default"])();
  return _react["default"].createElement(_Stepper["default"], {
    activeStep: 1,
    orientation: "vertical",
    connector: _react["default"].createElement(StepConnector, {
      className: classes.connector
    }),
    classes: {
      root: classes.stepper
    }
  }, props.steps.map(function (_ref) {
    var label = _ref.label,
        content = _ref.content;
    return _react["default"].createElement(_Step["default"], {
      key: label
    }, _react["default"].createElement(_StepLabel["default"], {
      classes: {
        label: classes.label,
        iconContainer: classes.iconContainer
      }
    }, label), _react["default"].createElement(_StepContent["default"], {
      classes: {
        root: classes.content
      }
    }, content));
  }));
});

var _default = StepperComponent;
exports["default"] = _default;