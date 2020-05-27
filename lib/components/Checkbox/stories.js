"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));

var _theme = _interopRequireDefault(require("../../style/theme"));

require("./Checkbox/styles.css");

// Import the storybook libraries
// Import our component from this folder
var options = [{
  label: 'Apple',
  value: 'apple'
}, {
  label: 'Pear',
  value: 'pear'
}, {
  label: 'Orange',
  value: 'orange'
}];
var classesExample = {
  // available classes: https://material-ui.com/api/checkbox/#css
  checkboxClasses: {},
  // available classes: https://material-ui.com/api/form-control-label/#css
  labelClasses: {
    label: 'my-checkbox-label'
  }
};

var Label = function Label() {
  var link = _react["default"].createElement("a", {
    href: "https://app.sovcombank.ru/policy/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438");

  return _react["default"].createElement(_react["default"].Fragment, null, "\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441", ' ', link);
};

(0, _react2.storiesOf)('Checkbox', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Checkbox', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Checkbox["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    label: 'Label',
    color: 'primary',
    value: true
  }), _react["default"].createElement("br", null), _react["default"].createElement(_Checkbox["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    label: _react["default"].createElement(Label, null),
    color: 'primary',
    classes: classesExample
  }));
}).add('CheckboxGroup', function () {
  return _react["default"].createElement(_CheckboxGroup["default"], {
    onChange: (0, _addonActions.action)('onChange'),
    options: options,
    formLabel: {
      label: 'Label'
    },
    color: 'primary',
    classes: {
      checkboxFormControlLabelRoot: 'checkboxFormControlLabelRoot-class'
    },
    checked: ['pear'] // error={true}
    // helperText={'Error message'}

  });
});