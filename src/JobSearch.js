import React, {Component} from 'react';
class JobSearch extends Component {
  constructor(props){
    super()
  }
  render() {
    return (
      <div>
        <h1>Kiran Jobs</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input type='text'onChange={this.props.handleChange}/>
          <input type='text'onChange={this.props.handleChange}/>
          <input type='submit' value='Search'/>
        </form>
      </div>
    )
  }
}
export default JobSearch