import styled from "@emotion/styled"
import { Backpack } from "@mui/icons-material"
import {
  Box,
  Button,
  IconButton,
  TextareaAutosize,
  Typography,
} from "@mui/material"
import React from "react"
import MaterialLayout from "../layout/MaterialLayout"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { useNavigate } from "react-router-dom"
import ContentPasteIcon from "@mui/icons-material/ContentPaste"

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
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1, { replace: true })
  }

  return (
    <MaterialLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2,
        }}
      >
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
          <StyledTextArea />
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
      </StyledFooter>
    </MaterialLayout>
  )
}

export default AddScenario
