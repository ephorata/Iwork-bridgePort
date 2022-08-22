import { Box } from '@mui/system'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Project from './pages/Project'
import ProjectList from './pages/ProjectList'

const App = () => {
  return (
    <div id='root'>
       <Routes>
           <Route path='/' element={<ProjectList />} />
           <Route path='/project/:id' element={<Project />} />

       </Routes>

    </div>
  )
}

export default App