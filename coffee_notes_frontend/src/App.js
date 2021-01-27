import './App.css';
import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

const Home  = () => {
  return (
    <h1>Hello World</h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
