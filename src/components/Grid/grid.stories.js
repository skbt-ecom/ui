import React from "react"

import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"

import Grid from "@material-ui/core/Grid"

import theme from "../../style/theme"

storiesOf("Grid", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => {
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
  })
