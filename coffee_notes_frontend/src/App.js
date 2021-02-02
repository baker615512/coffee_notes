import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CountriesContainer from './containers/CountriesContainer'

class App extends Component {

  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={CountriesContainer} />
          </Switch>
      </Router>
    );
  }
}

export default App;
