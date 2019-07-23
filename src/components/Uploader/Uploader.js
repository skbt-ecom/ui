import React, { useRef, useState } from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import CloudUpload from '@material-ui/icons/CloudUpload';

import cn from 'classnames';

import Dropzone from 'react-dropzone';

import Button from '../Button';
import CircularProgress from '../CircularProgress';

import useStyles from './styles';

function Uploader(props) {
  const { apiUrl, hint, errMsg } = props;

  const fileInput = useRef(null);
  const imgOut = useRef(null);

  const [progress, setProgress] = useState(0);
  const [loadState, setLoadState] = useState({});

  const classes = useStyles();

  function handleFocus() {
    if (!loadState.isSuccess) {
      fileInput.current.click();
    }
  }

  function proccessFile(files) {
    const file = files[0];

    if (!file) return;

    const xhr = new XMLHttpRequest();
    const fileData = new FormData();

    fileData.append('document', file);
    setLoadState({ isLoad: true });

    function onLoad() {
      console.log(this.responseText);
      setProgress(0);

      if (this.status == 200) {
        const reader = new FileReader();

        setLoadState({ isSuccess: true });
        reader.readAsDataURL(file);

        reader.onload = function() {
          imgOut.current.src = this.result;
        };

        reader.onerror = function(error) {
          console.log('Reader error: ', error);
        };
      } else {
        console.log('Error');
        setLoadState({ isError: true });
      }
    }

    function onError() {
      console.log(this.status, this.statusText);
      setLoadState({ isError: true });
      setProgress(0);
    }

    function onProgress(e) {
      const state = parseInt((e.loaded / e.total) * 100, 10);

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
      return (
        <LinearProgress
          classes={{ root: classes.linearProgress }}
          variant="determinate"
          color="primary"
          value={progress}
        />
      );
    } else if (loadState.isSuccess) {
      return <img alt="" src="" ref={imgOut} className={classes.imgOut} />;
    }

    return <CloudUpload className={classes.uploadIcon} />;
  }

  function Upload(props) {
    const { getRootProps, getInputProps, isDragActive } = props;
    const active =
      loadState.isLoad || loadState.isSuccess || isDragActive
        ? classes.active
        : '';

    return (
      <>
        <ButtonBase
          {...getRootProps({ onClick: handleFocus })}
          className={cn(classes.uploader, active)}
          disabled={loadState.isSuccess}
        >
          {loadState.isLoad && <CircularProgress color="primary" size="44px" />}
          <Content />
        </ButtonBase>

        {loadState.isSuccess && (
          <Button
            color="primary"
            classes={{ root: classes.removeBtn }}
            onClick={removeImage}
          >
            <Close className={classes.removeIcon} />
          </Button>
        )}
        {loadState.isError && (
          <Typography className={classes.errMsg}>{errMsg}</Typography>
        )}
        <input
          {...getInputProps({
            accept: 'image/*',
            multiple: false,
            ref: fileInput,
          })}
          className={classes.input}
        />
      </>
    );
  }

  return (
    <div className={cn(classes.root, loadState.isError ? classes.fail : '')}>
      <Dropzone onDrop={proccessFile}>{Upload}</Dropzone>
      <Typography className={classes.hint}>{hint}</Typography>
    </div>
  );
}

Uploader.defaultProps = {
  errMsg: '',
  hint: '',
  apiUrl: '',
};

export default React.memo(Uploader);
