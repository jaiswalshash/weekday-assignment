import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: []
}

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
      setJobs: (state, action) => {
        state.jobs = action.payload;
      }
    },
  });
  
  export default jobSlice.reducer;
  export const { setJobs } = jobSlice.actions;