import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredJobs } from "../redux/slice/jobs";
import { filterRoles, setEmployee, setRemoteSetting, updateExperience, updateSalary } from "../redux/slice/filter";

const Filters = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const [roles, setRoles] = useState([]);
  const [setting, setSelectedSetting] = useState([]);
  const [experience, setExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState("");
  const [employeeOptions, setEmployeeOptions] = useState([
    "1-50",
    "51-100",
    "101-500",
    "500+",
  ]);
  const [minimumSalary, setMinimumSalary] = useState("");

  useEffect(() => {
    handleFilterChange();
  }, [
    roles,
    setting,
    experience,
    companyName,
    selectedEmployees,
    minimumSalary,
  ]);

  const handleFilterChange = () => {
    const filteredJobs = jobs.filter((job) => {
      const matchesRoles =
        roles.length === 0 ||
        roles.length === 11 ||
        roles
          .map((role) => role.toLowerCase())
          .includes(job.jobRole.toLowerCase());
      const matchesRemote =
        setting.length === 0 ||
        (setting.includes("In-Office") && job.location !== "remote") ||
        setting
          .map((set) => set.toLowerCase())
          .includes(job.location.toLowerCase());

      const matchesExperience =
        experience === "" || job.minExp <= parseInt(experience);

      const matchesSalary =
        minimumSalary === null ||
        minimumSalary === "" ||
        job.minJdSalary >= parseInt(minimumSalary.replace(/\D/g, ""));

      return (
        matchesRoles && matchesRemote && matchesExperience && matchesSalary
      );
    });
    dispatch(setFilteredJobs(filteredJobs));
  };

  return (
    <div className="grid text-sm grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mx-10 mb-4 items-center">
      {/* Role Autocomplete */}
      <div className="flex items-center mb-2 ">
        <Autocomplete
          multiple
          id="roles"
          fullWidth
          options={[
            "Frontend",
            "Backend",
            "Android",
            "IOS",
            "Fullstack",
            "Flutter",
            "React Native",
            "Dev-Ops",
            "Web 3",
            "Data Science",
            "Tech Lead",
          ]}
          value={roles}
          size="small"
          onChange={(event, newValue) => {
            setRoles(newValue);
            dispatch(filterRoles(newValue))
          }}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Roles" />
          )}
        />
      </div>
      {/* Number Of Employees Autocomplete */}
      <div className="flex items-center mb-2">
        <Autocomplete
          fullWidth
          id="numberOfEmployees"
          options={employeeOptions}
          value={selectedEmployees}
          size="small"
          onChange={(event, newValue) => {
            setSelectedEmployees(newValue);
            dispatch(setEmployee(newValue))
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Number Of Employees"
            />
          )}
        />
      </div>
      {/* Remote Autocomplete */}
      <div className="flex items-center mb-2">
        <Autocomplete
          multiple
          id="remote"
          fullWidth
          options={["Remote", "In-Office", "Hybrid"]}
          size="small"
          onChange={(event, newValue) => {
            dispatch(setRemoteSetting(newValue));
            setSelectedSetting(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Remote" />
          )}
        />
      </div>
      {/* Minimum Experience Autocomplete */}
      <div className="flex items-center mb-2">
        <Autocomplete
          fullWidth
          id="experience"
          options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          size="small"
          value={experience}
          onChange={(event, newValue) => {
            dispatch(updateExperience(newValue))
            setExperience(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Minimum Experience"
            />
          )}
        />
      </div>
      {/* Minimum Salary Autocomplete */}
      <div className="flex items-center mb-2">
        <Autocomplete
          fullWidth
          id="salary"
          options={[
            "$10K",
            "$20K",
            "$30K",
            "$40K",
            "$50K",
            "$60K",
            "$70K",
            "$80K",
            "$90K",
            "$100K",
          ]}
          size="small"
          value={minimumSalary}
          onChange={(event, newValue) => {
            dispatch(updateSalary(newValue))
            setMinimumSalary(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Minimum Salary" />
          )}
        />
      </div>
      {/* Search Company Name TextField */}
      <div className="flex-grow mb-2">
        <TextField
          type="text"
          fullWidth
          label="Search Company Name"
          size="small"
          className="px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default Filters;
