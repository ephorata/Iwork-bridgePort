import { Box, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'



export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "10rem",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-around",
  padding: theme.spacing(2),
  
  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },

}))


const UserStory = ({userStory}) => {
  return (
    <Box  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',mt:3, width:{xs:'100%',}}}>
    <Typography variant="h6" sx={{color:'#aaa'}} mb={2}>USER STORY</Typography>
      <StyledPaper >
        <Typography sx={{display: 'flex', alignItems: 'flex-start',gap:1 ,width:{xs:'100%',md:'50%'}}} variant="body1">
          <Box sx={{flex:{xs:'.4', md:'.3'}}} display="inline" fontWeight="fontWeightBold">
            {" "}
            As ..{" "}
          </Box>
          <span style={{marginLeft:'10px',flex:1}}>{userStory.as}</span>
        </Typography>
        <Typography sx={{display: 'flex', alignItems: 'flex-start',gap:2 ,width:{xs:'100%',md:'50%'}}} variant="body1">
          <Box sx={{flex:{xs:'.4', md:'.3'}}} display="inline" fontWeight="fontWeightBold">
            {" "}
            I want ..{" "}
          </Box>
          <span style={{marginLeft:'10px',flex:1}}>{userStory.iWant}</span>
        </Typography>
        <Typography sx={{display: 'flex', alignItems: 'flex-start',gap:2 ,width:{xs:'100%',md:'50%'}}} variant="body1">
          <Box sx={{flex:{xs:'.4', md:'.3'}}} display="inline" fontWeight="fontWeightBold">
            {" "}
           So That ..{" "}
          </Box>
          <span style={{marginLeft:'10px',flex:1}}>{userStory.so}</span>
        </Typography>
      </StyledPaper>
    </Box>
  )
}

export default UserStory