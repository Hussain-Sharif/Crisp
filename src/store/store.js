import { configureStore } from "@reduxjs/toolkit";
import { candidateSlice } from "./candidateSlice";
import { interviewerSlice } from "./interviewerSlice";

export const store = configureStore({
    reducer:{
        candidateState:candidateSlice.reducer,
        interviewerState:interviewerSlice.reducer
    }
})