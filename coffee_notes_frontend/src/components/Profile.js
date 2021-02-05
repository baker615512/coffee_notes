import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { upvoteProfile } from '../redux/actionCreator'


const Profile = props => {

  const handleOnClick = () => {
    props.upvoteProfile(props.id)
  }

  return(
    <div>{props.flavor} - {props.votes} &emsp;
    <Button variant="info" id={props.id} 
    onClick={handleOnClick}>Vote</Button>{' '}</div>
  )
}

//const mapStateToProps = state => {
//  return {
//    profiles: state.profiles
//  }
//}

export default connect(null, {upvoteProfile})(Profile)