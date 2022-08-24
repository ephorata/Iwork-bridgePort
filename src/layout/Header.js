import React, { useCallback } from "react"
import { useLocation, useMatch, useNavigate, useParams, useResolvedPath } from "react-router-dom"
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const isHome = useMatch({path:'/',end:true})
 
  
  console.log("location:",location )


  const getPrevPathName = useCallback(
    () => {
      let pathName = 'Home'

      switch (location.pathname) {
        case '/':
          pathName = 'Home'
          break
        case `/project/${params.id}`:
          pathName = 'Project'
          break
          default:
            pathName = 'Back'
      }
      
      return pathName
    },
    [location.pathname],
  )
  
  const prevPathName = getPrevPathName()

  const handleBack = () => {
    navigate(-1,{replace: true})
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{justifyContent:"space-between"}}>
        <IconButton  onClick={handleBack}>
          <Typography variant="h6" component="div" sx={{display:'flex', justifyContent:'space-between',alignItems: 'center', flexGrow: 1,color:'#fff' }}>
          {!isHome && <ArrowBackIosIcon sx={{ml:1}}/>}  {prevPathName} 
          </Typography>
        </IconButton>
        
          <Avatar />
      </Toolbar>
    </AppBar>
  )
}

export default Header
