import React from "react"
import cn from "classnames"

import Box from "@material-ui/core/Box"
import Container from "../../Container"

import useStyles from "./styles"

export default function HeaderContainer(props) {
  const classes = useStyles(props)
  const { children, sticky = false } = props

  return (
    <header className={cn(classes.header, sticky && classes.stickyHeader)}>
      <Container>
        <nav>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={classes.navigation}
          >
            {children}
          </Box>
        </nav>
      </Container>
    </header>
  )
}
