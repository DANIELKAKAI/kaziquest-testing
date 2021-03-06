import React, { Component } from 'react';
import ProfileForm from './ProfileForm';
import { withRouter } from 'react-router-dom'

 class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: props.categories,
      job_types: props.job_types,
      token:props.token
    };
  }


  


  render() {


    if(this.state.token==null){
			this.props.history.push('/signin');
		}
      
    return (
      <ProfileForm categories={this.state.categories} job_types={this.state.job_types} />
    );

    


  }
}


export default withRouter(Profile);