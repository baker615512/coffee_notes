export const fetchCountries = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COUNTRIES'})
    fetch('http://localhost:3000/api/v1/countries').then(resp => {
      return resp.json()
    }).then(data => {
      dispatch({ type: 'ADD_COUNTRIES', countries: data })
    })
  }
}

export const setCountry = (id) => {
  return {
    type: "SET_COUNTRY",
    payload: {id}
  }
}

//export const upvoteProfile = (profile) => {
//  return (dispatch) => {
//    fetch(`http://localhost:3000/api/v1/countries/${id}/profiles/${id}`, {
//      headers: {
//        'Content-Type': 'application/json',
//        'Accept': 'application/json'
//      },
//      method: 'PATCH',
//      body: JSON.stringify(profile)
//    })
//    .then(res => res.json())
//    .then(vote => dispatch({type: 'UPVOTE_QUOTE', payload: vote}))
//  }
//}

//export const downvoteProfile = quoteId => {
//  return {
//    type: 'DOWNVOTE_QUOTE',
//    quoteId
//  }
//}
