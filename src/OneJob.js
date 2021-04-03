import React from "react";
const OneJob = (props) => {
  return (
    <div className="job-container shadow-lg my-2 d-flex ">
      <div>
        <img src={props.job.logo} alt={props.job.id}></img>
      </div>
      <div className="d-flex flex-column justify-content-center ml-4 ">
        <h4 className="text-info">{props.job.company}</h4>
        <h5>{props.job.position}</h5>
        <p>
          {props.job.postedAt} {props.job.contract} {props.job.location}
        </p>
      </div>
      <div className="languages d-flex align-self-center ml-auto">
        {props.job.languages.map((language, index) => (
          <span key={index} className="bg-info m-1">
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};
export default OneJob;
