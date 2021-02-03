import React, { Component } from 'react'
import { connect } from 'react-redux'
import Country from '../components/Country'
import { fetchCountries } from '../redux/actionCreator'

class CountriesContainer extends Component {

  componentDidMount(){
    this.props.fetchCountries()
  }

  renderCountries = () => {
    return this.props.countries.map((country) => <Country key={country.id} name={country.name} imgURL={country.image}/>)
  }

  render(){
    return(
      <div>{this.renderCountries()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchCountries})(CountriesContainer)