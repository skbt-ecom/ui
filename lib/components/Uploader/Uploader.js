"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _CloudUpload = _interopRequireDefault(require("@material-ui/icons/CloudUpload"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _Button = _interopRequireDefault(require("../Button"));

var _CircularProgress = _interopRequireDefault(require("../CircularProgress"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Uploader(props) {
  var apiUrl = props.apiUrl,
      hint = props.hint,
      errMsg = props.errMsg;
  var fileInput = (0, _react.useRef)(null);
  var imgOut = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      loadState = _useState4[0],
      setLoadState = _useState4[1];

  var classes = (0, _styles["default"])();

  function handleFocus() {
    if (!loadState.isSuccess) {
      fileInput.current.click();
    }
  }

  function proccessFile(files) {
    var file = files[0];
    if (!file) return;
    var xhr = new XMLHttpRequest();
    var fileData = new FormData();
    fileData.append('document', file);
    setLoadState({
      isLoad: true
    });

    function onLoad() {
      console.log(this.responseText);
      setProgress(0);

      if (this.status == 200) {
        var reader = new FileReader();
        setLoadState({
          isSuccess: true
        });
        reader.readAsDataURL(file);

        reader.onload = function () {
          imgOut.current.src = this.result;
        };

        reader.onerror = function (error) {
          console.log('Reader error: ', error);
        };
      } else {
        console.log('Error');
        setLoadState({
          isError: true
        });
      }
    }

    function onError() {
      console.log(this.status, this.statusText);
      setLoadState({
        isError: true
      });
      setProgress(0);
    }

    function onProgress(e) {
      var state = parseInt(e.loaded / e.total * 100, 10);
      setProgress(state);
    }

    function onUpload() {
      console.log('Данные полностью загружены на сервер!');
    }

    xhr.onload = onLoad;
    xhr.onerror = onError;
    xhr.upload.onprogress = onProgress;
    xhr.upload.onload = onUpload;
    xhr.upload.onerror = onError;
    xhr.open('POST', apiUrl, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(fileData);
  }

  function removeImage() {
    setLoadState({});
  }

  function Content() {
    if (loadState.isLoad) {
      return _react["default"].createElement(_LinearProgress["default"], {
        classes: {
          root: classes.linearProgress
        },
        variant: "determinate",
        color: "primary",
        value: progress
      });
    } else if (loadState.isSuccess) {
      return _react["default"].createElement("img", {
        alt: "",
        src: "",
        ref: imgOut,
        className: classes.imgOut
      });
    }

    return _react["default"].createElement(_CloudUpload["default"], {
      className: classes.uploadIcon
    });
  }

  function Upload(props) {
    var getRootProps = props.getRootProps,
        getInputProps = props.getInputProps,
        isDragActive = props.isDragActive;
    var active = loadState.isLoad || loadState.isSuccess || isDragActive ? classes.active : '';
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ButtonBase["default"], _extends({}, getRootProps({
      onClick: handleFocus
    }), {
      className: (0, _classnames["default"])(classes.uploader, active),
      disabled: loadState.isSuccess
    }), loadState.isLoad && _react["default"].createElement(_CircularProgress["default"], {
      color: "primary",
      size: "44px"
    }), _react["default"].createElement(Content, null)), loadState.isSuccess && _react["default"].createElement(_Button["default"], {
      color: "primary",
      classes: {
        root: classes.removeBtn
      },
      onClick: removeImage
    }, _react["default"].createElement(_Close["default"], {
      className: classes.removeIcon
    })), loadState.isError && _react["default"].createElement(_Typography["default"], {
      className: classes.errMsg
    }, errMsg), _react["default"].createElement("input", _extends({}, getInputProps({
      accept: 'image/*',
      multiple: false,
      ref: fileInput
    }), {
      className: classes.input
    })));
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.root, loadState.isError ? classes.fail : '')
  }, _react["default"].createElement(_reactDropzone["default"], {
    onDrop: proccessFile
  }, Upload), _react["default"].createElement(_Typography["default"], {
    className: classes.hint
  }, hint));
}

Uploader.defaultProps = {
  errMsg: '',
  hint: '',
  apiUrl: ''
};

var _default = _react["default"].memo(Uploader);

exports["default"] = _default;