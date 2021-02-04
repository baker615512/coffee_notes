import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Profile from '../components/Profile'
//import { upvoteProfile, downvoteProfile } from '../redux/actionCreator'

class ProfileContainer extends Component {

  render(){
    return(
      <div>Profile Container</div>
    )
  }
}





export default connect()(ProfileContainer)