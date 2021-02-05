import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile'

class ProfileContainer extends Component {

  renderProfile = () => {
    return this.props.selectedCountry.profiles.map((profile) => {
      return <Profile key={profile.id}
      flavor={profile.flavor.name}
      votes={profile.votes}
      id={profile.id} />
    })
  }

  render(){
    return(
      <div>
        <h1>{this.props.selectedCountry.name}</h1>
          <h2><ul>{this.renderProfile()}</ul></h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCountry: state.countries.selectedCountry
  }
}

export default connect(mapStateToProps)(ProfileContainer)