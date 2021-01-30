import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CountriesContainer from './containers/CountriesContainer'

class App extends Component {

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

export default App;
