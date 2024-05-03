import { configureStore } from "@reduxjs/toolkit";

import jobs from "./slice/jobs";
import filter from "./slice/filter";

export const store = configureStore({
  reducer: {
    jobs: jobs,
    filter: filter
  },
  devTools: true
});