import styled from "@emotion/styled"
import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import MaterialLayout from "../layout/MaterialLayout"

import ShareIcon from "@mui/icons-material/Share"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { StyledPaper } from "./ProjectList"
import UserStory from "../components/UserStory"
import Scenarios from "../components/Scenarios"
import { useDispatch, useSelector } from "react-redux"
import { deleteProject, getProject } from "../features/projectSlice"
import { useParams } from "react-router-dom"

const SubHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),

}))

const Project = () => {
  const projects = useSelector(state => state.project)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  
  const project = projects.find(project => project.id == id)

  const handleDelete = () => {
      dispatch(deleteProject(id))
  }
  useEffect(() => {
    try {
      
    }catch(err){
      console.log(err);
    }

  }, [])
  
  console.log(project)
  return (
    <MaterialLayout>
      <SubHeader>
        <Typography variant="h5"> {project.title}</Typography>
        <Box>
          <IconButton aria-label="Edit Project">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Share Project">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="Delete Project">
            <DeleteIcon onClick={handleDelete} />
          </IconButton>
        </Box>
      </SubHeader>
      <UserStory userStory={project.userStory} />
      <Box sx={{ marginTop:{xs:'15%',md:"5%"}}}>
      <Scenarios />

      </Box>
      
    </MaterialLayout>
  )
}

export default Project
