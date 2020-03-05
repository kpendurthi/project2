import React from 'react';
import Parser from 'html-react-parser';
const JobDetail = (props) => {
  
  return (
    <div className="Job-Details">
        <img src={props.currentJob.company_logo} alt="logo" />
        <h3>{props.currentJob.type}/{props.currentJob.location}</h3>
        <h2>{props.currentJob.title}</h2>
         {Parser(props.currentJob.description)}
         {Parser(props.currentJob.how_to_apply)}
      </div>
  )
}
export default JobDetail;

//job.title
//job.desctiption
//joblogo.logo
