import React, {Component} from 'react';
import {Route, Link, Switch, Redirect}  from 'react-router-dom';
import './App.css';
import axios from 'axios';
import JobDetails from './JobDetails'
import JobSearch from './JobSearch';
import Header from './Header'
import JobsList from './JobsList'

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
    this.getAllJobs();
  }

  handleClick = (job) => {
    this.setState({
      currentJob: job
    })
  }
  handleDescChange = event => {
    let jobDescription = event.target.value
    this.setState({jobDescription})  
  }
  handleLocationChange = event => {
    let jobLoaction = event.target.value
    this.setState({jobLoaction})  
  }

  handleSubmit = event => {
    event.preventDefault()
    this.getJobs();
    let jobInfo = {
      jobDescription: this.state.jobDescription,
      jobLoaction:    this.state.jobLoaction
    }
  }

  getAllJobs(){
    axios({
      method: "get",
      url: "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",
      headers: { Accept: "application/json" }  
    })
      .then(response => {
        console.log("getalljobs")
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

  getJobs(){
    axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.jobDescription}&location=${this.state.jobLoaction}`,
      //url: "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york",
      headers: { Accept: "application/json" } 
    })
      .then(response => {
        console.log("getjobs")
        console.log(this.url)
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
    console.log(this.state.jobDescription)
    console.log(this.state.jobLoaction)
    
    return (
      <div className='App'>
         <nav>
           <Link to='/JobsList'> All Jobs </Link>
          <JobSearch
                handleDescChange={this.handleDescChange} 
                handleLocationChange={this.handleLocationChange}
                handleSubmit={this.handleSubmit}
          />
          </nav> 
          <main>
            <Switch>
              <Route path='/JobsList' exact 
              render={()=>  <JobsList jobs={this.state.jobs}/>}/> 
              <Route path='/JobDetails/:id'  exact
              render={(props) => <JobDetails {...props} jobs={this.state.jobs}/>}/>
            </Switch>
          </main>
        </div>     
    );
  }
}

export default App;