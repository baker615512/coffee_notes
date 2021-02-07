import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CountriesContainer from './containers/CountriesContainer'
import ProfilesContainer from './containers/ProfilesContainer'
import About from './components/About'
import NavBar from './components/Navbar'

class App extends Component {

  render(){
    return (
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/countries" component={CountriesContainer} />
            <Route exact path="/countries/:id" component={ProfilesContainer} />
          </Switch>
      </Router>
    );
  }
}

export default App;
