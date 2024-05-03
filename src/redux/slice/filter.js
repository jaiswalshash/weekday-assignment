import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  employee: null,
  setting: [],
  experience: null,
  salary: null,
  company: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterRoles: (state, action) => {
      state.roles = action.payload;
    },
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    setRemoteSetting: (state, action) => {
      state.setting = action.payload;
    },
    updateExperience: (state, action) => {
      state.experience = action.payload;
    },
    updateSalary: (state, action) => {
      state.salary = action.payload;
    },
    updateCompany: (state, action) => {
      state.company = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterRoles, setEmployee, updateExperience, updateSalary, updateCompany, setRemoteSetting } = filterSlice.actions;
