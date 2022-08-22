import { configureStore } from "@reduxjs/toolkit";
import project from '../features/projectSlice'


export const store = configureStore({
    reducer: {
        project,
    }
})