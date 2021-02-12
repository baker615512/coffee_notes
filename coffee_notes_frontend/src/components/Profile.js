import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { upvoteProfile } from '../redux/actionCreator'
import { Component } from 'react';

class Profile extends Component {

  handleOnClick = () => {
    this.props.upvoteProfile(this.props.id)
  }

  render(){
  return(
    <Card style={{ width: '28rem' }}>
      <Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>{this.props.flavor}</ListGroup.Item>
        <ListGroup.Item>Vote count: {this.props.votes}</ListGroup.Item>
        <Button variant="info" size="lg" id={this.props.id} 
        onClick={this.handleOnClick}>Vote</Button>{' '}
      </ListGroup>
      </Card.Body>
    </Card>
  )}
}

export default connect(null, {upvoteProfile})(Profile)