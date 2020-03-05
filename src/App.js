import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import JobDetails from './JobDetails'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      jobs:[],
      currentJob:[]
    }
  }

  componentDidMount() {
    console.log("componetdidmount")
    this.getJobs();
  }


  getJobs(){
    axios({
      method: "get",
      url: "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york",
      //url: "https://jobs.github.com/positions.json",
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

  handleClick = (job) => {
    this.setState({
      currentJob: job
    })
  
  }

  render (){
    console.log("render")
    console.log(this.state.jobs)
    return (
      <div className="App">
         <div className="side-nav">
              {this.state.jobs.map((job,index)=>(
                <div key={index}>
                     <p>{job.title}</p>
                     <button onClick={() => this.handleClick(job)}>Click me!</button>
              </div>
              ))}
         </div>
            <JobDetails
            currentJob={this.state.currentJob}/>
      </div> 
    );
  }
}

export default App;