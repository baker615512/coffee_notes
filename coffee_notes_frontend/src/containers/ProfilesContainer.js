import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile'
//import { upvoteProfile, downvoteProfile } from '../redux/actionCreator'

class ProfileContainer extends Component {

  renderProfile = () => {
    return this.props.selectedCountry.profiles.map((profile) => {
      return <Profile key={profile.id}
      flavor={profile.flavor.name}
      votes={profile.votes} />
    })
  }

  render(){
    return(
      <div>{this.renderProfile()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCountry: state.countries.selectedCountry
  }
}

export default connect(mapStateToProps)(ProfileContainer)