import { createSlice } from "@reduxjs/toolkit";


export const interviewerSlice = createSlice({
    name:"interviewer",
    initialState:{
        allCondidatesData: localStorage.getItem("allCondidatesData") || []
    }
})