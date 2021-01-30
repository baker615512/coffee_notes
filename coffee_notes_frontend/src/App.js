import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CountriesContainer from './containers/CountriesContainer'

class App extends Component {

  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
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

export default App;
