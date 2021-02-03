import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Country = props => {
  return(
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.imgURL} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        Click the button to vote on the flavor profile of {props.name}'s coffee.
      </Card.Text>
      <Button variant="primary">Vote here</Button>
    </Card.Body>
  </Card>
  )
}
export default Country