import React, { useState, useEffect } from "react";
import Data from "./data.json";
import OneJob from "./OneJob";

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    setAllJobs(Data);
  }, []);

  if (Data.length !== 0) {
    return (
      <div className="mt-3">
        {allJobs.map((job, index) => (
          <OneJob job={job} key={index} />
        ))}
      </div>
    );
  }
};
export default Jobs;
