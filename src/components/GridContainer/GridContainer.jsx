import React from 'react'
import { Grid } from "./styled"

function GridContainer ({ children }) {
  return (
    <Grid>
      {children}
    </Grid>
  )
}

export { GridContainer };
