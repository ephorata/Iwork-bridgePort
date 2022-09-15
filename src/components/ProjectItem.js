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
    <List sx={{padding:'2px'}}>
      <ListItem  sx={{padding:'2px'}} >
        <ListItemButton sx={{display:'flex', justifyContent: 'space-between'}}  to={`/project/${props.id}` } component={Link}>
           
          <ListItemText sx={{flex:1}} ><Typography sx={{fontSize:{xs:'16px',md:"25px"},}} variant="h6">{props.title}</Typography></ListItemText>
          <ListItemText sx={{flex:.8}} ><Typography  variant="body2">{props.stories} Scenarios</Typography></ListItemText>
          
        </ListItemButton>
        <IconButton  aria-label="Share Icon">
          <ShareIcon sx={{color: '#3996e3'}}  />
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="Delete Icon">
          <DeleteIcon sx={{color: 'red'}}  />
        </IconButton>
      </ListItem>
    </List>
  )
}

export default ProjectItem
