import React from 'react';
import useStyles from './styles';

const setCaretPosition = (elem, caretPos) => {
  if (elem != null) {
    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.move('character', caretPos);
      range.select();
    } else {
      if (elem.selectionStart) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      } else elem.focus();
    }
  }
};
const stopCaret = e => {
  if (e.target.value.length > 2) {
    setCaretPosition(e.target, 4);
  }
};

const VerifyCode = React.memo(props => {
  const classes = useStyles(props);

  return (
    <div className={classes.verifyCodeWrapper}>
      <div className={classes.verifyCodeContainer}>
        <input
          className={classes.verifyCodeInput}
          type="text"
          maxLength="4"
          onKeyPress={stopCaret}
          onKeyDown={stopCaret}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
});

export default VerifyCode;
