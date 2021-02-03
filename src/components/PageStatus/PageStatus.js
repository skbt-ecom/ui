import React from "react"

import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import Container from "../Container"
import iconDone from "./img/icon_done.svg"
import iconError from "./img/icon_error.svg"

import useStyles from "./styles"

const successMsg = {
  head: "Спасибо!",
  title: "Ваша заявка отправлена",
  description: "В ближайшее время с Вами свяжутся специалисты нашего Банка.",
}

const errorMsg = {
  head: "Произошла ошибка",
  title: "Возможно:",
  description: (
    <>
      <ul className="errorMsg">
        <li>Вы уже оставили заявку*</li>
        <li>Сервер занят</li>
        <li>Ведутся технические работы</li>
      </ul>
      <div className="errorHint">* в сутки можно оставлять одну заявку</div>
    </>
  ),
}

function getText(isSuccess, key, paramFromProps) {
  if (paramFromProps) {
    return paramFromProps
  }

  const defVariant = isSuccess ? successMsg[key] : errorMsg[key]
  return defVariant
}

export default function PageStatus(props) {
  const classes = useStyles(props)
  const { success, head, title, description, content } = props
  const headValue = getText(success, "head", head)
  const titleValue = getText(success, "title", title)
  const descriptionValue = getText(success, "description", description)

  return (
    <Container>
      <div className={classes.root}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h1" className={classes.head}>
            {headValue}
          </Typography>
          <div>
            <img alt="icon" src={success ? iconDone : iconError} className={classes.icon} />
          </div>
        </Box>
        {content}
        {!content && (
          <>
            <Typography variant="h3" className={classes.title}>
              {titleValue}
            </Typography>
            <Typography variant="h4" className={classes.description}>
              {descriptionValue}
            </Typography>
          </>
        )}
      </div>
    </Container>
  )
}

PageStatus.defaultProps = {
  success: false,
}
