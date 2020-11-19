import React from "react"
import Grid from "@material-ui/core/Grid"

const GridComponent = React.memo(props => {
  return <Grid {...props} />
})

export default GridComponent
