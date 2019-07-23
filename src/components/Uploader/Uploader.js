import React, { useRef, useState } from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import CloudUpload from '@material-ui/icons/CloudUpload';

import cn from 'classnames';

import Dropzone from 'react-dropzone';

import Button from '../Button';

import useStyles from './styles';

function Uploader(props) {
  const { apiUrl, hint } = props;

  const fileInput = useRef(null);
  const imgOut = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const classes = useStyles();

  function handleFocus() {
    if (!isSuccess) {
      fileInput.current.click();
    }
  }

  function proccessFile(files) {
    const file = files[0];

    if (!file) return;

    const xhr = new XMLHttpRequest();
    const fileData = new FormData();

    fileData.append('document', file);
    setIsLoad(true);

    function onLoad() {
      console.log(this.responseText);
      setIsLoad(false);

      if (this.status == 200) {
        const reader = new FileReader();

        setIsSuccess(true);
        setProgress(0);
        reader.readAsDataURL(file);

        reader.onload = function() {
          imgOut.current.src = this.result;
        };

        reader.onerror = function(error) {
          console.log('Reader error: ', error);
        };
      } else {
        console.log('Error');
        setIsError(true);
      }
    }

    function onError() {
      console.log(this.status, this.statusText);
      setIsError(true);
      setIsLoad(false);
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
    setIsSuccess(false);
    setProgress(0);
  }

  function Content() {
    if (isLoad) {
      return (
        <LinearProgress
          classes={{ root: classes.linearProgress }}
          variant="determinate"
          color="primary"
          value={progress}
        />
      );
    } else if (isSuccess) {
      return <img alt="" src="" ref={imgOut} className={classes.imgOut} />;
    }

    return <CloudUpload className={classes.uploadIcon} />;
  }

  function Upload(props) {
    const { getRootProps, getInputProps, isDragActive } = props;
    const active = isLoad || isSuccess || isDragActive ? classes.active : '';

    return (
      <>
        <ButtonBase
          {...getRootProps({ onClick: handleFocus })}
          className={cn(classes.uploader, active)}
          disabled={isSuccess}
        >
          {isLoad && <CircularProgress color="primary" size="44px" />}
          <Content />
        </ButtonBase>

        {isSuccess && (
          <Button
            color="primary"
            classes={{ root: classes.removeBtn }}
            onClick={removeImage}
          >
            <Close className={classes.removeIcon} />
          </Button>
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
    <div className={cn(classes.root, isError ? classes.fail : '')}>
      <Dropzone onDrop={proccessFile}>{Upload}</Dropzone>
      <Typography className={classes.hint}>{hint}</Typography>
    </div>
  );
}

Uploader.defaultProps = {
  hint: '',
  apiUrl: '',
};

export default React.memo(Uploader);
