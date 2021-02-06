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

export const upvoteProfile = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/profiles/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(id)
    })
    .then(res => res.json())
    .then(vote => dispatch({type: 'UPVOTE_PROFILE', payload: vote}))
  }
}