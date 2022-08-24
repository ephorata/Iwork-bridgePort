import styled from "@emotion/styled"
import { Box, Button, Paper, Typography } from "@mui/material"
import { flexbox } from "@mui/system"
import React from "react"
import { Link } from "react-router-dom"


export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "10rem",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: theme.spacing(2),
  
  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },

}))


const Scenarios = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',mt:3, width:{xs:'100%'}}}>
      <Typography variant="h6" sx={{color:'#aaa'}} mb={2}>
        SCENARIOS
      </Typography>
      <StyledPaper >
        <Typography variant="body1" mb={1}>
          You haven't created any scenarios yet.
        </Typography>
        <Button component={Link} to="add-scenarios" variant="outlined">
                Add Scenarios
          </Button>
      </StyledPaper>
    </Box>
  )
}

export default Scenarios
