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

var _StepConnector = _interopRequireDefault(require("@material-ui/core/StepConnector"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function StepperComponent(props) {
  var classes = (0, _styles["default"])(props);
  var orientation = props.orientation,
      steps = props.steps,
      className = props.className,
      activeStep = props.activeStep;
  var isVertical = orientation === 'vertical';
  return _react["default"].createElement(_Stepper["default"], {
    activeStep: activeStep,
    connector: _react["default"].createElement(_StepConnector["default"], {
      classes: {
        disabled: classes.hideXs,
        active: (0, _classnames["default"])(classes.connectorActive, classes.hideXs)
      }
    }),
    classes: {
      root: (0, _classnames["default"])(classes.stepper, className),
      horizontal: classes.connectorHorizontal,
      vertical: classes.connectorVertical
    },
    orientation: orientation
  }, steps.map(function (_ref) {
    var label = _ref.label,
        content = _ref.content;
    return _react["default"].createElement(_Step["default"], {
      key: label,
      classes: {
        completed: classes.hideXs
      }
    }, _react["default"].createElement(_StepLabel["default"], {
      classes: {
        label: isVertical ? classes.labelVertical : classes.labelHorizontal,
        iconContainer: (0, _classnames["default"])(classes.iconContainer, isVertical ? '' : classes.iconContainerHorizontal)
      },
      optional: isVertical ? null : _react["default"].createElement(_Typography["default"], {
        className: classes.contentHorizontal
      }, content)
    }, label), isVertical && _react["default"].createElement(_StepContent["default"], {
      classes: {
        root: classes.contentVertical
      }
    }, content));
  }));
}

StepperComponent.defaultProps = {
  orientation: 'horizontal',
  className: '',
  activeStep: 0
};

var _default = _react["default"].memo(StepperComponent);

exports["default"] = _default;