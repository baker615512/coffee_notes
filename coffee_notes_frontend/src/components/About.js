import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const About = () => {
  return (
  <Jumbotron fluid>
    <Container>
      <h1>Coffee Notes</h1>
      <h5>Welcome to a place where you can share your coffee-tasting experiences.</h5>
      <h5>Vote on flavor profiles of coffee from various countries.</h5>
    </Container>
  </Jumbotron>
  )
}

export default About