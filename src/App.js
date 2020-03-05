import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import JobDetails from './JobDetails'
import JobSearch from './JobSearch';

//const gitHubUrl="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york"

const gitHubUrl="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=newyork"


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      jobs:null,
      currentJob:null,
      jobDescription:'',
      jobLoaction:''
    }
  }

  componentDidMount() {
    console.log("componetdidmount")
    this.getJobs();
  }

  handleClick = (job) => {
    this.setState({
      currentJob: job
    })
  }
  handleChange = event => {
    let jobDescription = event.target.value
    this.setState({jobDescription})  
  }

  handleSubmit = event => {
    event.preventDefault()
    let newTodo = {
      jobDescription: this.state.jobDescription
     // jobLoaction:this.state.jobLoaction
    }
  }

  getJobs(){
    axios({
      method: "get",
     // url: "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york",
      //url: "https://jobs.github.com/positions.json",
      url:gitHubUrl,
      headers: { Accept: "application/json" }
      
    })
      .then(response => {
        console.log("response")
        console.log(response.data)
        this.setState({
          jobs: response.data
        });
        
      }) 
      .catch(error => {
        console.log("errorsection")
        console.log(error);
      });
  }

  

  render (){
    console.log("render")
    console.log(this.state.jobs)
    console.log(this.state.jobLoaction)
    console.log(this.state.jobDescription)
    return (
      <div className="App">
        <div className="top-nav">
        <JobSearch 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
        />
        </div>
         <div className="side-nav">
              {this.state.jobs && this.state.jobs.map((job,index)=>(
                <div key={index}>
                     <p>{job.title}</p>
                     <button onClick={() => this.handleClick(job)}>Job Details</button>
              </div>
              ))}
         </div>
         {this.state.currentJob &&
            <JobDetails currentJob={this.state.currentJob}/> }
      </div> 
    );
  }
}

export default App;