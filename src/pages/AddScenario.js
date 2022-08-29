import styled from "@emotion/styled"
import { Backpack } from "@mui/icons-material"
import {
  Box,
  Button,
  IconButton,
  TextareaAutosize,
  Typography,
} from "@mui/material"
import React, { useMemo, useState } from "react"
import MaterialLayout from "../layout/MaterialLayout"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import ContentPasteIcon from "@mui/icons-material/ContentPaste"
import { useDispatch, useSelector } from "react-redux"
import { editProject } from "../features/projectSlice"

import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import EditIcon from "@mui/icons-material/Edit"


const StyledTextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  height: "20rem",
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
}))

const StyledFooter = styled("footer")(({ theme }) => ({
  width: "100%",
  height: "3rem",
  background: theme.palette.primary.main,
  position: "absolute",
  bottom: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  padding: " 10px 2rem",
  
}))

const AddScenario = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [edit, setEdit] = useState(false)
  const projects = useSelector(state => state.project)
  const project = useMemo(() => projects.find(project => project.id === parseInt(id))  ,[projects])
  const dispatch = useDispatch()
  const [projectTitle, setProjectTitle] = useState(project.title)




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

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <MaterialLayout prop="">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2,
        }}
      >
        
             {!edit && <Box sx={{display: "flex", justifyContent: "space-between",}} > <Typography variant="h4"> {projectTitle}</Typography> 
             <IconButton onClick={toggleEdit} aria-label="Edit Project">
              <EditIcon />
            </IconButton>
             </Box>}
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
        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          <Typography
            sx={{ margin: { xs: "1rem  0", md: "2rem 0" } }}
            variant="body1"
          >
            To begin, answer one simple question:
          </Typography>
          <Typography mb={2} variant="h5">
            What items will you need to make "a peanut butter and jelly
            sandwich"?
          </Typography>
          <StyledTextArea placeholder="Enter you description here " />
          <Button
            sx={{ display: "block", width: "100%", mt: 2 }}
            variant="outlined"
          >
            Continue
          </Button>
        </Box>
      </Box>
      <StyledFooter>
        <IconButton sx={{color: "white"}} onClick={handleBack}>
          <ArrowBackIosIcon sx={{ ml: 1 }} /> {"Back"}
        </IconButton>
        <ContentPasteIcon
          sx={{ marginLeft: { xs: "20%", lg: "3rem" }, color: "white" }}
          fontSize="large"
        />
        <h1 style={{color: "white" ,marginLeft:'10px'}}>0</h1>
      </StyledFooter>
    </MaterialLayout>
  )
}

export default AddScenario
