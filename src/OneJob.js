import React from "react";
const OneJob = (props) => {
  return (
    <div
      className={`job-container shadow-lg  d-flex  mt-3 ml-auto mr-auto `}
      id={`${props.job.featured && "myBorder"}`}
    >
      <div>
        <img src={props.job.logo} alt={props.job.id}></img>
      </div>
      <div className="d-flex flex-column justify-content-center ml-4 ">
        <h4 className="text-info">
          {props.job.company}
          {props.job.new ? (
            <span className="new-featured mr-3 ml-3">New</span>
          ) : (
            <p></p>
          )}
          {props.job.featured ? (
            <span className="new-featured bg-dark">featured</span>
          ) : (
            <p></p>
          )}
        </h4>
        <h5>{props.job.position}</h5>
        <p>
          {props.job.postedAt} {props.job.contract} {props.job.location}
        </p>
      </div>
      <div className="languages d-flex align-self-center ml-auto">
        <span className="bg-info m-1">{props.job.role}</span>
        <span className="bg-info m-1">{props.job.level}</span>
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
