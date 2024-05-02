import { configureStore } from "@reduxjs/toolkit";

import jobs from "./slice/jobs";

export const store = configureStore({
  reducer: {
    jobs: jobs
  },
  devTools: true
});