import React from "react";
const OneJob = (props) => {
  return (
    <div className="job-container shadow-lg my-2 d-flex">
      <div>
        <img src={props.job.logo} alt={props.job.id}></img>
      </div>
      <div className="d-flex flex-column">
        <h3 className="text-info">{props.job.company}</h3>
        <h2>{props.job.position}</h2>
        <p>
          {props.job.postedAt} {props.job.contract} {props.job.location}
        </p>
      </div>
    </div>
  );
};
export default OneJob;
