import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'
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
        <Header name={this.props.selectedCountry.name}/>
        <h4>{this.renderProfile()}</h4>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCountry: state.selectedCountry
  }
}

export default connect(mapStateToProps)(ProfileContainer)