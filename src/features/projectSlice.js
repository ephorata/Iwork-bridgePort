import { createSlice } from "@reduxjs/toolkit"
import projectList from "../data/project_list.json"
console.log(projectList)

const fetchInitalProjects = () => {
  const localData = localStorage.getItem("projects")
  try {
    console.log('local data',localData)
    const data =  localData !== null ? JSON.parse(localData) : projectList.data
    localStorage.setItem('projects', JSON.stringify(data))
    return data
  } catch (e) {
    console.log(e)

  }
 
}

const initialState = fetchInitalProjects()
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    getProject(state,action){
      return state = state.filter(project => project.id == action.payload.id)
      
    },
    editProject(state, action) {
      const projectIntex = state.findIndex(project => project.id == action.payload.id)


      state[projectIntex].title = action.payload.title
      localStorage.setItem("projects", JSON.stringify(state))
      
      return state
    },
    deleteProject(state, action) {
      console.log("action payload", action.payload)
      state = state.filter(project => project.id != action.payload)
      localStorage.setItem("projects", JSON.stringify(state))
      return state
    },
  },
})

export const {getProject, editProject, deleteProject } = projectSlice.actions
export default projectSlice.reducer
