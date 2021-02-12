import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const About = () => {
  return (
  <Jumbotron fluid>
    <Container>
      <h1>Coffee Notes</h1>
      <h5>Welcome to a place where you can share your coffee-tasting experiences.</h5>
      <h5>Vote on flavor profiles of coffee from various countries.</h5>
      <Link to="/countries">
        <Button variant="info">See Countries</Button>
      </Link>
    </Container>
  </Jumbotron>
  )
}

export default About