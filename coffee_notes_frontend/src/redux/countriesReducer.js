export const countriesReducer = (state = {countries: [], selectedCountry: {}, loading: false}, action) => {
  switch(action.type){
    case 'LOADING_COUNTRIES':
      return {
        ...state,
        countries: [...state.countries],
        loading: true
      }
    case "SET_COUNTRY":
      const selectedCountry = {...state.countries.find(country => country.id === action.payload.id)}
      return {
        ...state, selectedCountry
      }
    case 'ADD_COUNTRIES':
      return {
        ...state,
        countries: action.countries,
        loading: false
      }
    case 'UPVOTE_PROFILE':
      const selectedCountryCopy = {...state.selectedCountry}
      const profile = selectedCountryCopy.profiles.find(profile => profile.id === action.payload.id)
      profile.votes = action.payload.votes
      return {...state, selectedCountry: selectedCountryCopy}
    default: return state
  }
}
