import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    filteredJobs:[]
}

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
      setJobs: (state, action) => {
        state.jobs = action.payload;
      },
      setFilteredJobs: (state, action) => {
        state.filteredJobs = action.payload
      }
    },
  });
  
  export default jobSlice.reducer;
  export const { setJobs, setFilteredJobs } = jobSlice.actions;