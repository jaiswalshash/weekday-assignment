import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import JobCard from "../components/JobCard";
import InfiniteScroll from "../components/InfiniteScroll";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Description from "../components/Description";
import { useDispatch } from "react-redux";
import { setJobs } from "../redux/slice/jobs";

function FindJobs() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const fetchMoreData = async () => {
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
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMoreData(); // Initial data fetch
  }, []);

  return (
    <div className="">
      <Header />
      <Description />
      <Filters />
      <div className="grid justify-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.length > 0 &&
          data.map((job, i) => {
            console.log(job);
            return <JobCard key={i} job={job} />;
          })}
      </div>

      <InfiniteScroll fetchData={fetchMoreData} />
    </div>
  );
}

export default FindJobs;
