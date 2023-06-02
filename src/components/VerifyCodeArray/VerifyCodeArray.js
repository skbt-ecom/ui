import React, { useRef } from "react"
import cn from "classnames"

import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"

import useStyles from "./styles"

function VerifyCode(props) {
  const classes = useStyles(props)
  const { code, setCode, disabled, error, errorMsg, helperText } = props

  const inputRefs = useRef([])

  const onFocus = (index) => inputRefs.current[index]?.select()

  const setVal = (index, newVal, focusIndex) => {
    const newCode = code.map((val, i) => (i === index ? newVal : val))

    setCode(newCode)

    if (focusIndex < code.length) {
      inputRefs.current[focusIndex].focus()
    }
  }

  const onKeyDown = (index, event) => {
    const isNumericKey = /^\d$/.test(event.key)
    const acceptedKeys = ["Tab", "Alt"]

    if (!acceptedKeys.includes(event.key) && !event.ctrlKey) {
      event.preventDefault()
    }

    switch (event.key) {
      case "ArrowLeft":
        if (index > 0) inputRefs.current[index - 1].focus()
        break
      case "ArrowRight":
        if (index < code.length - 1) inputRefs.current[index + 1].focus()
        break
      case "Backspace":
        if (code[index] === "" && index > 0) {
          setVal(index - 1, "", index - 1)
        } else {
          setVal(index, "", index)
        }
        break
      case "Delete":
        setVal(index, "", index + 1)
        break
      default:
        if (!isNumericKey) break
        setVal(index, event.key, index + 1)
    }
  }

  const onPaste = (e, index) => {
    e.preventDefault()
    const pastedVal = e.clipboardData.getData("text").slice(0, code.length)
    const newCode = [...code]

    if (!/\d+/.test(pastedVal)) return

    for (let i = 0; i < pastedVal.length && i + index < code.length; i++) {
      newCode[i + index] = pastedVal[i]
    }

    setCode(newCode)

    if (inputRefs.current[index + pastedVal.length - 1]) {
      inputRefs.current[index + pastedVal.length - 1].focus()
    } else {
      inputRefs.current.at(-1).focus()
    }
  }

  return (
    <FormControl classes={{ root: classes.formControlRoot }} error={error}>
      <div className={classes.verifyCodeWrapper}>
        <div className={classes.inputWrapper}>
          {code.map((_, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              className={cn(
                classes.input,
                code[i] && classes.activeInput,
                error && classes.errInput
              )}
              pattern="\d*"
              value={code[i]}
              ref={(el) => {
                inputRefs.current[i] = el
              }}
              onKeyDown={(e) => onKeyDown(i, e)}
              onFocus={() => onFocus(i)}
              onPaste={(e) => onPaste(e, i)}
              maxLength={1}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={i === 0}
              disabled={disabled}
              autoComplete="one-time-code"
            />
          ))}
        </div>
      </div>
      {error && (
        <FormHelperText classes={{ root: classes.errorTextRoot }}>{errorMsg}</FormHelperText>
      )}
      <div className={classes.helperText}>{helperText}</div>
    </FormControl>
  )
}

export default VerifyCode
