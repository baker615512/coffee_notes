export const fetchCountries = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COUNTRIES'})
    fetch('http://localhost:3000/api/v1/countries').then(response => {
      return response.json()
    }).then(data => {
      dispatch({ type: 'ADD_COUNTRIES', countries: data })
    })
  }
}