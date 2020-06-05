"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

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

function Uploader(props) {
  var apiUrl = props.apiUrl,
      hint = props.hint,
      errMsg = props.errMsg;
  var fileInput = (0, _react.useRef)(null);
  var imgOut = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
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
      var state = (0, _parseInt2["default"])(e.loaded / e.total * 100, 10);
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
      return /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], {
        classes: {
          root: classes.linearProgress
        },
        variant: "determinate",
        color: "primary",
        value: progress
      });
    } else if (loadState.isSuccess) {
      return /*#__PURE__*/_react["default"].createElement("img", {
        alt: "",
        src: "",
        ref: imgOut,
        className: classes.imgOut
      });
    }

    return /*#__PURE__*/_react["default"].createElement(_CloudUpload["default"], {
      className: classes.uploadIcon
    });
  }

  function Upload(props) {
    var getRootProps = props.getRootProps,
        getInputProps = props.getInputProps,
        isDragActive = props.isDragActive;
    var active = loadState.isLoad || loadState.isSuccess || isDragActive ? classes.active : '';
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ButtonBase["default"], (0, _extends2["default"])({}, getRootProps({
      onClick: handleFocus
    }), {
      className: (0, _classnames["default"])(classes.uploader, active),
      disabled: loadState.isSuccess
    }), loadState.isLoad && /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
      color: "primary",
      size: "44px"
    }), /*#__PURE__*/_react["default"].createElement(Content, null)), loadState.isSuccess && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      color: "primary",
      classes: {
        root: classes.removeBtn
      },
      onClick: removeImage
    }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
      className: classes.removeIcon
    })), loadState.isError && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      className: classes.errMsg
    }, errMsg), /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, getInputProps({
      accept: 'image/*',
      multiple: false,
      ref: fileInput
    }), {
      className: classes.input
    })));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.root, loadState.isError ? classes.fail : '')
  }, /*#__PURE__*/_react["default"].createElement(_reactDropzone["default"], {
    onDrop: proccessFile
  }, Upload), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
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