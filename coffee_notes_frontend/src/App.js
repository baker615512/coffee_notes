import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CountriesContainer from './containers/CountriesContainer'
import { connect } from 'react-redux'
import { fetchCountries } from './redux/actionCreator'

class App extends Component {

  componentDidMount(){
    this.props.fetchCountries()
  }

  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/countries" component={CountriesContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    countryPics: state.countries,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchCountries})(App);
