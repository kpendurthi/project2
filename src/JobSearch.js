import React, {Component} from 'react';
class JobSearch extends Component {
  constructor(props){
    super()
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' placeholder='job description' onChange={this.props.handleDescChange}/>
          <input type='text' placeholder='job location'onChange={this.props.handleLocationChange}/>
          <input type='submit' value='Search'/>
        </form>
      </div>
    )
  }
}
export default JobSearch