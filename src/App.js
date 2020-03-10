import React, {Component} from 'react';
import {Route, Link, Switch, withRouter}  from 'react-router-dom';

import './App.css';
import axios from 'axios';
import JobDetails from './JobDetails'
import JobSearch from './JobSearch';
import JobsList from './JobsList'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      jobs:null,
      currentJob:null,
      jobDescription:'',
      jobLocation:''
    }
  }

  componentDidMount() {
    this.getAllJobs();
  }

  handleClick = event => {
    this.getAllJobs();
  }

  handleDescChange = event => {
    let jobDescription = event.target.value
    this.setState({jobDescription})  
  }

  handleLocationChange = event => {
    let jobLocation = event.target.value
    this.setState({jobLocation})  
  }

  handleSubmit = event => {
    event.preventDefault()
    this.getJobs();
    let jobInfo = {
      jobDescription: this.state.jobDescription,
      jobLocation:    this.state.jobLocation
    }
  }

  getAllJobs(){
    axios({
      method: "get",
      url: "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",
      headers: { Accept: "application/json" }  
    })
      .then(response => {

        this.setState({
          jobs: response.data
        });   
       // this.props.history.push("/JobsList");
      }) 
      .catch(error => {
        console.log(error);
      });
  }

  getJobs(){
    axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.jobDescription}&location=${this.state.jobLocation}`,
      headers: { Accept: "application/json" } 
    })
      .then(response => {
        this.setState({
          jobs: response.data
        });
        this.props.history.push("/JobsList");
      }) 
      .catch(error => {
        console.log(error);
      });
  }

  render (){
    return (
      <div className='App'>
         <nav>
           <div classname='header'>
           <Link to='/JobsList' onClick={this.handleClick} > All Jobs </Link>
           </div>
           <div classname='jobsearch'>
          <JobSearch
                handleDescChange={this.handleDescChange} 
                handleLocationChange={this.handleLocationChange}
                handleSubmit={this.handleSubmit}
          />
          </div>
          </nav> 
          <main>
            <Switch>
              <Route path='/JobsList' exact 
              render={()=>  <JobsList getAllJobs={this.getAllJobs}  jobs={this.state.jobs}/>}/> 
              <Route path='/JobDetails/:id'  exact
              render={(props) => <JobDetails {...props} jobs={this.state.jobs}/>}/>
            </Switch>
          </main>
        </div>     
    );
  }
}

export default withRouter(App);