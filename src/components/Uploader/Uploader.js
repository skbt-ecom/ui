import React, { useRef, useState } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import cn from 'classnames';

import useStyles from './styles';

function Uploader(props) {
  const { apiUrl, hint } = props;

  const fileInput = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const classes = useStyles();

  function handleFocus() {
    fileInput.current.click();
  }

  function proccessFile(e) {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    const fileData = new FormData();

    fileData.append('document', file);
    setIsLoad(true);

    xhr.onload = function() {
      if (this.status == 200) {
        console.log('Uploaded');
      } else {
        console.log('Error');
        setIsError(true);
      }

      console.log(this.responseText);
      setIsLoad(false);
      // var reader = new FileReader();
      // reader.readAsDataURL(image);
      // reader.onload = function () { out.src = this.result; };
      // reader.onerror = function (error) { console.log('Reader error: ', error); };
    };

    xhr.onerror = function() {
      console.log(this.status, this.statusText);
      setIsError(true);
      setIsLoad(false);
    };

    xhr.upload.onprogress = function(e) {
      const state = parseInt((e.loaded / e.total) * 100, 10);

      setProgress(state);
    };

    xhr.upload.onload = function() {
      console.log('Данные полностью загружены на сервер!');
    };

    xhr.upload.onerror = function() {
      setIsError(true);
      setIsLoad(false);
    };

    xhr.open('POST', apiUrl, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(fileData);
  }

  function Content() {
    if (isLoad) {
      return (
        <>
          <CircularProgress color="primary" size="44px" />
          <LinearProgress
            classes={{ root: classes.linearProgress }}
            variant="determinate"
            color="primary"
            value={progress}
          />
        </>
      );
    }

    return (
      <svg width="34" height="24" className={classes.icon}>
        <path d="M21.996 13.004h-2v6.6a.4.4 0 0 1-.4.4h-5.2a.4.4 0 0 1-.4-.4v-6.6h-2a.4.4 0 0 1-.29-.68l5-5a.4.4 0 0 1 .56 0l5 5a.4.4 0 0 1-.27.68zm5-3a10.49 10.49 0 0 0-20.45-2.76 8.5 8.5 0 0 0 1.95 16.76h18.5a7 7 0 0 0 0-14z" />
      </svg>
    );
  }

  return (
    <div className={isError ? classes.fail : ''}>
      <ButtonBase
        onClick={handleFocus}
        className={cn(classes.uploader, isLoad ? classes.active : '')}
      >
        <Content />
      </ButtonBase>
      <input
        type="file"
        accept="image/*"
        ref={fileInput}
        className={classes.input}
        onChange={proccessFile}
      />
      <Typography className={classes.hint}>{hint}</Typography>
    </div>
  );
}

Uploader.defaultProps = {
  hint: '',
  apiUrl: '',
};

export default React.memo(Uploader);
