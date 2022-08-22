import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { StyledPaper } from "../pages/ProjectList"

const Scenarios = () => {
  return (
    <>
      <Typography variant="h6" sx={{color:'#aaa'}} mb={2}>
        SCENARIOS
      </Typography>
      <StyledPaper sx={{  width:{xs:"100%",md:"50%"}, margin: "0", padding: 10 }}>
        <Typography variant="body1" mb={1}>
          You haven't created any scenarios yet.
        </Typography>
        <Button variant="outlined">Add Scenarios</Button>
      </StyledPaper>
    </>
  )
}

export default Scenarios
