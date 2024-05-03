import React from "react";

const Description = () => {
  return (
    <div className="bg-teal-100 p-4 px-10 mx-10 mt-10 mb-10 flex justify-center rounded-md shadow-md">
      <p className="font-light">
        We, at Weekday, are creating a go-to hub for uncovering the real issues
        candidates should be aware of before joining a company.{" "}
        <a
          href="https://www.weekday.works/companies-work-culture-database"
          target="_blank"
          rel="noreferrer"
          className="font-bold"
        >
          Access 150+ company reviews here
        </a>
      </p>
    </div>
  );
};

export default Description;
