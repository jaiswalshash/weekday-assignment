import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import JobCard from "../components/JobCard";
import InfiniteScroll from "../components/InfiniteScroll";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Description from "../components/Description";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredJobs, setJobs } from "../redux/slice/jobs";

function FindJobs() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const filteredData = useSelector((state) => state.jobs.filteredJobs);
  const roles = useSelector((state) => state.filter.roles);
  const setting = useSelector((state) => state.filter.setting);
  const experience = useSelector((state) => state.filter.experience);
  const minimumSalary = useSelector((state) => state.filter.salary);

  const dispatch = useDispatch();
  const fetchMoreData = async () => {
    setLoader(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      limit: 10,
      offset: page * 10,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData.jdList]);
      dispatch(setJobs([...data, ...newData.jdList]));
      dispatch(setFilteredJobs([...data, ...newData.jdList]));
      setPage((prevPage) => prevPage + 1);

      if (
        roles.length === 0 &&
        setting.length === 0 &&
        experience === null &&
        minimumSalary === null
      ) {
        //
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchMoreData(); // Initial data fetch
  }, []);

  useEffect(() => {
    handleFilterChange();
  }, [roles, setting, experience, minimumSalary]);

  const handleFilterChange = () => {
    const filteredJobs = data.filter((job) => {
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
        experience === null ||
        experience === "" ||
        job.minExp <= parseInt(experience);

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
    <div>
      {loader && <Loader />}
      <Header />
      <Description />
      <Filters />
      <div className="grid mx-10 mt-4 justify-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((job, i) => {
            return <JobCard key={i} job={job} />;
          })
        ) : (
          <p className="flex justify-center font-semibold text-xl">No jobs found.</p>
        )}
      </div>

      <InfiniteScroll fetchData={fetchMoreData} />
    </div>
  );
}

export default FindJobs;
