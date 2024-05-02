import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredJobs } from "../redux/slice/jobs";

const Filters = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const [roles, setRoles] = useState([]);
  const [remoteOptions, setRemoteOptions] = useState(["Yes", "No"]);
  const [setting, setSelectedSetting] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [employeeOptions, setEmployeeOptions] = useState([
    "1-50",
    "51-100",
    "101-500",
    "500+",
  ]);
  const [minimumSalary, setMinimumSalary] = useState("")
  const [selectedEmployees, setSelectedEmployees] = useState();

//   const handleFilterChange = () => {
//     const filteredJobs = jobs.filter((job) => {
//       const matchesRoles = roles.length === 0 || roles.includes(job.jobRole);
//       const matchesRemote =
//         remoteOptions.length === 0 || remoteOptions.includes(job.remote);
//       const matchesTechStack =
//         techStack.length === 0 ||
//         techStack.some((stack) => job.techStack.includes(stack));
//       const matchesEmployeeRange =
//         selectedEmployees.length === 0 ||
//         selectedEmployees.some((range) => {
//           const [min, max] = range.split("-");
//           const numEmployees = job.numberOfEmployees;
//           return (
//             (min === null || numEmployees >= parseInt(min)) &&
//             (max === null || numEmployees <= parseInt(max))
//           );
//         });

//       return (
//         matchesRoles &&
//         matchesRemote &&
//         matchesTechStack &&
//         matchesEmployeeRange
//       );
//     });

//     dispatch(setFilteredJobs(filteredJobs));
//   };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mx-10 mb-4 items-center">
      <div className="flex items-center mb-2 ">
        <Autocomplete
          multiple
          id="roles"
          fullWidth
          options={["Frontend", "Backend", "Android", "IOS", "Fullstack", "Flutter", "React Native", "Dev-Ops", "Web 3", "Data Science"]}
          value={roles}
          size="small"
          onChange={(event, newValue) => {
            console.log(newValue)
            setRoles(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Roles" />
          )}
        />
      </div>
      <div className="flex items-center mb-2">
        <Autocomplete
          fullWidth
          id="numberOfEmployees"
          options={employeeOptions}
          value={selectedEmployees}
          size="small"
          onChange={(event, newValue) => {
            setSelectedEmployees(newValue);
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
      <div className="flex items-center mb-2">
        <Autocomplete
          multiple
          id="remote"
          fullWidth
          options={["Remote", "In-Office", "Hybrid"]}
          size="small"
          //   value={setting}
          onChange={(event, newValue) => {
            setSelectedSetting(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Remote" />
          )}
        />
      </div>
      <div className="flex items-center mb-2">
        <Autocomplete
          fullWidth
          id="experience"
          options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"]}
          size="small"
          value={techStack}
          onChange={(event, newValue) => {
            setTechStack(newValue);
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
      <div className="flex items-center mb-2">
        <Autocomplete
          fullWidth
          id="salary"
          options={["$10K", "$20K", "$30K","$40K", "$50K", "$60K", "$70K", "$80K", "$90K", "$100K+"]}
          size="small"
          value={minimumSalary}
          onChange={(event, newValue) => {
            setMinimumSalary(newValue);
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
