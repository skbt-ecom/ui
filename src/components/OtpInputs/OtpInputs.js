import React, { useMemo } from "react"
import cn from "classnames"

import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"

import useStyles from "./styles"

export default function OtpInputs(props) {
  const classes = useStyles(props)
  const { code, setCode, codeLength = 4, disabled, error, errorMsg, helperText } = props

  const onChange = (value) => setCode(value)

  const valueItems = useMemo(() => {
    const valueArray = code.split("")
    const items = []

    for (let i = 0; i < codeLength; i++) {
      const char = valueArray[i]

      if (/^\d+$/.test(char)) {
        items.push(char)
      } else {
        items.push("")
      }
    }

    return items
  }, [code, codeLength])

  const focusToNextInput = (target) => {
    const {nextElementSibling} = target

    if (nextElementSibling) {
      nextElementSibling.focus()
    }
  }
  const focusToPrevInput = (target) => {
    const {previousElementSibling} = target

    if (previousElementSibling) {
      previousElementSibling.focus()
    }
  }
  const handleChange = (event, i) => {
    const {target} = event
    let targetValue = target.value.trim()

    const isNumericKey = /^\d+$/.test(targetValue)
    if (!isNumericKey && targetValue !== "") {
      return
    }

    const nextInputEl = target.nextElementSibling
    if (!isNumericKey && nextInputEl && nextInputEl.value !== "") {
      return
    }

    targetValue = isNumericKey ? targetValue : " "

    const targetValueLength = targetValue.length

    if (targetValueLength === 1) {
      const newValue = code.substring(0, i) + targetValue + code.substring(i + 1)

      onChange(newValue)

      if (!isNumericKey) {
        return
      }

      focusToNextInput(target)
    } else if (targetValueLength === codeLength) {
      onChange(targetValue)

      target.blur()
    }
  }
  // eslint-disable-next-line consistent-return
  const onKeyDown = (event) => {
    const { key } = event
    const {target} = event

    if (key === "ArrowRight") {
      event.preventDefault()
      return focusToNextInput(target)
    }

    if (key === "ArrowLeft") {
      event.preventDefault()
      return focusToPrevInput(target)
    }

    const targetValue = target.value

    target.setSelectionRange(0, targetValue.length)

    if (event.key !== "Backspace" || targetValue !== "") {
      // eslint-disable-next-line consistent-return
      return
    }

    focusToPrevInput(target)
  }

  // eslint-disable-next-line consistent-return
  const onFocus = (event) => {
    const { target } = event

    const prevInputEl = target.previousElementSibling

    if (prevInputEl && prevInputEl.value === "") {
      return prevInputEl.focus()
    }

    target.setSelectionRange(0, target.value.length)
  }

  return (
    <FormControl classes={{ root: classes.formControlRoot }}>
      <div className={classes.verifyCodeWrapper}>
        <div className={classes.inputWrapper}>
          {valueItems.map((digit, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{1}"
              maxLength={codeLength}
              className={cn(
                classes.input,
                valueItems[i] && classes.activeInput,
                error && classes.errInput
              )}
              value={digit}
              onChange={(event) => handleChange(event, i)}
              onKeyDown={onKeyDown}
              onFocus={onFocus}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={i === 0}
              disabled={disabled}
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
