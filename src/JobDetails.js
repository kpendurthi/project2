import React,{Component} from 'react';
import Parser from 'html-react-parser';
import "./App.css"


class  JobDetail extends Component {
 constructor (props){
     super(props)
    }

  render (){
    let currentID=this.props.match.params.id
    let currentJob=this.props.jobs.filter((job,index)=>{
        return currentID===job.id })
        console.log(currentJob)
        return (
            <div className="Job-Details">
                <img src={currentJob[0].company_logo} alt="logo" height="100" width="100"/>
                <h3>{currentJob[0].type}/{currentJob[0].location}</h3>
                <h2>{currentJob[0].title}</h2>
                {Parser(currentJob[0].description)}
                {Parser(currentJob[0].how_to_apply)}
            </div>
        )
    }
}
export default JobDetail;

//job.title
//job.desctiption
//joblogo.logo
