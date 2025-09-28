const { createSlice } = require("@reduxjs/toolkit");
const { interviewStatusesEnum } = require("../utils/interviewStatus.enum");


export const candidateSlice=createSlice({
    name:"candidate",
    initialState:{
        name:localStorage.getItem("candidateData")?.name||"",
        phone:localStorage.getItem("candidateData")?.phone||"",
        email:localStorage.getItem("candidateData")?.email||"",
        resume:localStorage.getItem("candidateData")?.resume||null,
        currentInterviewStatus:localStorage.getItem("candidateData")?.currentInterviewStatus||interviewStatusesEnum.notStarted, // help me to restore the session
        questionsByAI:localStorage.getItem("candidateData")?.questionsByAI||[],
        answersByCandidate:localStorage.getItem("candidateData")?.answersByCandidate||[],
        score:0,
    }
})