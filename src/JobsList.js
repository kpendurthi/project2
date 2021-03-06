import React, { Component } from "react";
import {Link} from 'react-router-dom'

class JobsList extends Component {
    constructor(props){
      super()
  }
  componentDidMount(){
      this.props.getAllJobs();
  }
    render() {
      let jobList=this.props.jobs.map((job,index)=>{
        return (
          <div key={job.id} >
             <Link to={`/JobDetails/${job.id}`}>{job.title}</Link> 
             <div>{job.location}</div>
          </div>
        )
      })
  
      return (
        <div class="joblist">
          <div className="JobList">{jobList}</div>
        </div>
      );
    }
  }
  
  export default JobsList;