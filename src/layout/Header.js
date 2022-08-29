import React, { useCallback, useEffect, useMemo, useState } from "react"
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
  useResolvedPath,
} from "react-router-dom"
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { useDispatch, useSelector } from "react-redux"
import { getProject } from "../features/projectSlice"

const Header = () => {
  const projects = useSelector(state => state.project)
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const isHome = useMatch({ path: "/", end: true })
  const dispatch = useDispatch()


  const project = useMemo(() =>  projects.find(project => project.id === parseInt(params.id)) , [projects])
  const [pathName, setPathName] = useState("Home")

  console.log("project:", project)


  const getPrevPathName = useCallback(() => {
    let pathName = "Home"

    switch (location.pathname) {
      case "/":
        pathName = "Home"
        break
      case `/project/${params.id}`:
        pathName = "Project"
        break
      case `/project/${params.id}/add-scenarios`:
        pathName = project.title
        break
      default:
        pathName = "Back"
    }

    return pathName
  }, [location.pathname, project?.title])

  const handleBack = () => {
    navigate(-1, { replace: true })
  }

  useEffect(() => {
    setPathName(() => getPrevPathName())
    
  
    
  }, [project])
  

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton onClick={handleBack}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
              color: "#fff",
            }}
          >
            {!isHome && <ArrowBackIosIcon sx={{ ml: 1 }} />} {pathName}
          </Typography>
        </IconButton>

        <Avatar />
      </Toolbar>
    </AppBar>
  )
}

export default Header
