import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { upvoteProfile } from '../redux/actionCreator'

const Profile = props => {

  const handleOnClick = () => {
    props.upvoteProfile(props.id)
  }

  return(
    <Card style={{ width: '28rem' }}>
      <Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>{props.flavor}</ListGroup.Item>
        <ListGroup.Item>Vote count: {props.votes}</ListGroup.Item>
        <Button variant="info" size="lg" id={props.id} 
        onClick={handleOnClick}>Vote</Button>{' '}
      </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default connect(null, {upvoteProfile})(Profile)