import React from "react"

import Grid from "."

const story = {
  title: "Grid",
}
export default story

export function Default() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid item container direction="column" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              {value}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
