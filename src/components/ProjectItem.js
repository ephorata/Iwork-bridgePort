import React from "react"
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"
import ShareIcon from "@mui/icons-material/Share"
import DeleteIcon from "@mui/icons-material/Delete"
import { Link } from "react-router-dom"
import { deleteProject } from "../features/projectSlice"
import { useDispatch } from "react-redux"
const ProjectItem = (props) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteProject(Number(props.id)))
    console.log("deleted" ,props.id)
}
  return (
    <List>
      <ListItem >
        <ListItemButton  to={`/project/${props.id}` } component={Link}>
          <Box sx={{display: "flex", flexDirection:'row',alignItems: 'center', justifyContent: "space-between",width:'100%'}}>
          <ListItemText sx={{width:'20rem'}}><Typography sx={{fontSize:{xs:'15px',md:"25px"},}} variant="h6">{props.title}</Typography></ListItemText>
          <ListItemText><Typography  align="left" sx={{ml:{xs:1, sm:0}}}  variant="body2">{props.stories} Stories</Typography></ListItemText>
          </Box>
        </ListItemButton>
        <IconButton  aria-label="Share Icon">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="Delete Icon">
          <DeleteIcon  />
        </IconButton>
      </ListItem>
    </List>
  )
}

export default ProjectItem
