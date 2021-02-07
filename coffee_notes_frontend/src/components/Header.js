import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Header = props => {
  return (
  <Jumbotron>
    <h1>{props.name}</h1>
  </Jumbotron>
  )
}

export default Header