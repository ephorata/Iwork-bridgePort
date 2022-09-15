import { Route, Routes, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import styled from "@emotion/styled"
import { Button, IconButton, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useRef, useState } from "react"
import MaterialLayout from "../layout/MaterialLayout"

import ShareIcon from "@mui/icons-material/Share"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"

import { deleteProject, editProject, getProject } from "../features/projectSlice"
import { StyledPaper } from "./ProjectList"
import UserStory from "../components/UserStory"
import Scenarios from "../components/Scenarios"
import AddScenario from "./AddScenario"

const SubHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}))

const Project = () => {
  const projects = useSelector(state => state.project)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const project = projects.find(project => project.id === parseInt(id))

  const [projectTitle, setProjectTitle] = useState(project.title)

  const handleDelete = () => {
    dispatch(deleteProject(id))
  }
  const confirmEdit = () => {
    setEdit(false)
    dispatch(editProject({id: id,title: projectTitle}))
    console.log("successfully edit projectTitle")
  }
  const discardEdit = () => {
    setEdit(false)
    setProjectTitle(project.title)
  }
  const toggleEdit = () => {
    setEdit(() => !edit)
  }
  useEffect(() => {
    try {
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <>
      <MaterialLayout>
        <SubHeader>
          {!edit && <Typography variant="h5"> {projectTitle}</Typography>}
          {edit && (
            <Box sx={{display:"flex"}}>
            <input
              style={{ padding: "10px 15px" , borderRadius:'2rem'}}
              label="Edit"
              value={projectTitle}
              onChange={e => setProjectTitle(e.target.value)}
            />
            <Box component={"div"}>
              <IconButton onClick={confirmEdit}>
                <CheckIcon sx={{color:'green'}} />
              </IconButton>
              <IconButton onClick={discardEdit}>
                <CloseIcon sx={{color:'red'}} />
              </IconButton>
            </Box>
          </Box>
          )}

          <Box >
            <IconButton onClick={toggleEdit} aria-label="Edit Project">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Share Project">
              <ShareIcon sx={{color:'#3996e3'}} />
            </IconButton>
            <IconButton aria-label="Delete Project">
              <DeleteIcon sx={{color:'red'}} />
            </IconButton>
          </Box>
        </SubHeader>
        <Box sx={{display: {xs:'block',lg:'flex'},gap:4, justifyContent:'space-between'}}>
        <UserStory userStory={project.userStory} />
          <Scenarios />
        </Box>
      </MaterialLayout>
   
    </>
  )
}

export default Project
