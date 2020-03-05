import React from 'react';
const JobDetail = (props) => {
  
  return (
    <div className="Job-Details">
        <img src={props.currentJob.company_logo} alt="logo" />
        <h3>{props.currentJob.type}/{props.currentJob.location}</h3>
        <h2>{props.currentJob.title}</h2>
         {props.currentJob.description}
         {props.currentJob.how_to_apply}
      </div>
  )
}
export default JobDetail;

//job.title
//job.desctiption
//joblogo.logo
