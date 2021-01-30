export const countriesReducer = (state = {countries: [], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_COUNTRIES':
      return {
        ...state,
        countries: [...state.countries],
        loading: true
      }
    case 'ADD_COUNTRIES':
      return {
        ...state,
        countries: action.countries,
        loading: false
      }
    default: return state
  }
}
