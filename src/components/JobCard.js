import React, { useState } from "react";
import logo from "../assets/weekday.png";

const JobCard = ({ job }) => {
  const [showFullText, setShowFullText] = useState(false);
  const jobDetailsFromCompany = job.jobDetailsFromCompany || "";
  const maxLength = 100;
  const truncatedText = showFullText
    ? jobDetailsFromCompany
    : jobDetailsFromCompany.slice(0, maxLength);
  const showReadMore =
    !showFullText && jobDetailsFromCompany.length > maxLength;
  const showReadLess = showFullText && jobDetailsFromCompany.length > maxLength;

  const handleReadMoreLess = () => {
    setShowFullText(!showFullText);
  };

  console.log(job.jobRole);
  return (
    <div className="bg-white p-4 mb-4 rounded-md shadow-md transform transition-transform hover:translate-y-[-5px] hover:shadow-lg cursor-pointer">
      <p className="shadow-md mb-2 flex items-center rounded-md text-[0.7rem] w-[10rem]">
        ⌛&nbsp;Posted 14 hours ago
      </p>
      <div className="flex items-center mb-2 gap-5">
        <img src={logo} alt="company-logo" width={40} />
        <div>
          <div className="text-md">Weekday</div>
          <div className="font-bold text-sm">{job.jobRole}</div>
          <div className="text-sm">{job.location}</div>
        </div>
      </div>

      <div className="text-sm font-light">Estimated Salary: <span className="font-bold">${job.minJdSalary}K - ${job.maxJdSalary}K </span></div>
      <div className="text-sm font-light">
        Experience Required: <span className="font-bold">{job.minExp} years - {job.maxExp} years</span>
      </div>
      <div className="mb-2 mt-2 text-sm font-light">
        {truncatedText}
        {showReadMore && (
          <span
            className="text-blue-500 cursor-pointer font-normal "
            onClick={handleReadMoreLess}
          >
            {" "}
            Read More
          </span>
        )}
        {showReadLess && (
          <span
            className="text-blue-500 font-normal cursor-pointer "
            onClick={handleReadMoreLess}
          >
            {" "}
            Read Less
          </span>
        )}
      </div>
    </div>
  );
};

export default JobCard;
