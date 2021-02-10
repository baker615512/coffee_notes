import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCountry } from '../redux/actionCreator'

const Country = props => {
  const handleOnClick = () => {
    props.setCountry(props.id)
    props.history.push(`/countries/${props.id}`)
  }
  return(
    <CardColumns>
      <Card bg={"dark"}
      text={"white"} 
      style={{ width: '30rem' }}>
        <Card.Img variant="top" src={props.imgURL} alt={props.name} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Click the button to vote on the flavor profile of {props.name}'s coffee.
          </Card.Text>
            <Button variant="info" onClick={handleOnClick}>Vote here</Button> 
        </Card.Body>
      </Card>
    </CardColumns>
  )
}
export default connect(null, {setCountry})(withRouter(Country))