import React, { useState } from 'react';

const JobCard = ({ job }) => {
  const [showFullText, setShowFullText] = useState(false);
  const jobDetailsFromCompany = job.jobDetailsFromCompany || '';
  const maxLength = 100;
  const truncatedText = showFullText ? jobDetailsFromCompany : jobDetailsFromCompany.slice(0, maxLength);
  const showReadMore = !showFullText && jobDetailsFromCompany.length > maxLength;
  const showReadLess = showFullText && jobDetailsFromCompany.length > maxLength;

  const handleReadMoreLess = () => {
    setShowFullText(!showFullText);
  };

  console.log(job.jobRole);
  return (
    <div className="bg-white p-4 mb-4 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold">Company</div>
        <div>Date</div>
      </div>
      {<div className="font-bold mb-2">{job.jobRole}</div>}
      <div className="text-yellow-500 font-semibold mb-2">{job.minExp}</div>
      <div className="mb-2">
        {truncatedText}
        {showReadMore && <span className="text-blue-500 cursor-pointer" onClick={handleReadMoreLess}> Read More</span>}
        {showReadLess && <span className="text-blue-500 cursor-pointer" onClick={handleReadMoreLess}> Read Less</span>}
      </div>
    </div>
  );
};

export default JobCard;