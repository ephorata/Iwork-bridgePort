import { createSlice } from "@reduxjs/toolkit"
import projectList from "../data/project_list.json"
console.log(projectList)

const initialState = projectList.data
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    editProject(state,action) {
      return state
    },
    deleteProject(state, action) {
      console.log("action payload", action.payload)
      return state.filter(project => project.id != action.payload)
    },
  },
})

export const {editProject, deleteProject } = projectSlice.actions
export default projectSlice.reducer
