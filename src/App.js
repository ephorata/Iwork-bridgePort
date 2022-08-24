import { Box } from '@mui/system'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddScenario from './pages/AddScenario'
import Project from './pages/Project'
import ProjectList from './pages/ProjectList'

const App = () => {
  return (
    <div id='root'>
       <Routes>
           <Route path='/' element={<ProjectList />} />
           <Route path='/project/:id'> 
            <Route index exact element={<Project />} />
            <Route path='add-scenarios' element={<AddScenario />} />
           </Route>

       </Routes>

    </div>
  )
}

export default App