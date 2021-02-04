import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CountriesContainer from './containers/CountriesContainer'
import ProfilesContainer from './containers/ProfilesContainer'

class App extends Component {

  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={CountriesContainer} />
            <Route exact path="/countries/:id" component={ProfilesContainer} />
          </Switch>
      </Router>
    );
  }
}

export default App;
