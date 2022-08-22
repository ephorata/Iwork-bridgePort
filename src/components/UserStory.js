import { Box, Typography } from '@mui/material'
import React from 'react'
import { StyledPaper } from '../pages/ProjectList'

const UserStory = ({userStory}) => {
  return (
    <>
    <Typography variant="h6" sx={{color:'#aaa'}} mb={2}>USER STORY</Typography>
      <StyledPaper sx={{ width:{xs:"100%",md:"50%"},margin:'0', heigh:'10rem', display:'flex',flexDirection:'column', justifyContent:"flex-start", padding:3}}>
        <Typography variant="body1">
          <Box display="inline" fontWeight="fontWeightBold">
            {" "}
            AS ..{" "}
          </Box>
          {userStory.as}
        </Typography>
        <Typography variant="body1">
          <Box display="inline" fontWeight="fontWeightBold">
            {" "}
            I want ..{" "}
          </Box>
        {userStory.iWant}
        </Typography>
        <Typography variant="body1">
          <Box display="inline" fontWeight="fontWeightBold">
            {" "}
           So That ..{" "}
          </Box>
          {userStory.so}
        </Typography>
      </StyledPaper>
    </>
  )
}

export default UserStory