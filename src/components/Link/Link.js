import React from "react"
import Link from "@material-ui/core/Link"

import useStyles from "./styles"

const LinkComponent = React.memo(props => {
  const classes = useStyles(props)

  return (
    <Link
      {...props}
      classes={{
        root: classes.root,
        button: classes.button,
      }}
    />
  )
})

export default LinkComponent
