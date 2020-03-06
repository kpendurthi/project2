import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

class JobsList extends Component {
    constructor(props){
      super()
  }
    render() {
      console.log("Joblist")
      console.log(this.props.jobs)
      let jobList=this.props.jobs.map((job,index)=>{
        return (
          <div key={job.id} >
             <Link to={`/JobDetails/${job.id}`}>{job.title}</Link> 
             <div>{job.location}</div>
          </div>
        )
      })
  
      return (
        <div>
          <div className="JobList">{jobList}</div>
        </div>
      );
    }
  }
  
  export default JobsList;