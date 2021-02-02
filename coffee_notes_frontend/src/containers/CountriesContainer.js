import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCountries } from '../redux/actionCreator'

class CountriesContainer extends Component {

  componentDidMount(){
    this.props.fetchCountries()
  }

  render(){
    return(
      <div></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    countryPics: state.countries,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchCountries})(CountriesContainer)