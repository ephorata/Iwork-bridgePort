
import { Button, Paper, Typography } from "@mui/material"
import { Box, styled } from "@mui/system"
import React from "react"
import { useSelector } from "react-redux"
import ProjectItem from "../components/ProjectItem"
import MaterialLayout from "../layout/MaterialLayout"

export const StyledPaper = styled(Paper)(({ theme }) => ({
    maxWidth: "60rem",
    margin: "auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  }))
  

  const SubHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(4)
  }))

const ProjectList = () => {
     const projects = useSelector(state => state.project)
  return (
    <MaterialLayout>
        <SubHeader>
            <Typography variant="h5"> Projects</Typography>
            <Button variant="outlined">Export All</Button>

        </SubHeader>
        <StyledPaper>
          {
            projects?.map(project =>
              <ProjectItem {...project} />
              )
          }
        </StyledPaper>
     
    </MaterialLayout>
  )
}

export default ProjectList
