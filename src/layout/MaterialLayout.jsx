import React from "react"
import {
  Paper,
  CssBaseline,
  ThemeProvider,
  createTheme,
  styled,
  responsiveFontSizes,
} from "@mui/material"

import Header from "./Header"

import { blue, blueGrey,   } from "@mui/material/colors"

let theme = createTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
  },
})

theme = responsiveFontSizes(theme)

const StyledDiv = styled("div")(({ theme }) => ({
  width: "auto",
  marginLeft: theme.spacing(4),
  marginRight: theme.spacing(4),
  [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}))


export default function MaterialLayout(props) {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <StyledDiv>
      {children}
      </StyledDiv>
    </ThemeProvider>
  )
}
