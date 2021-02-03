export const profilesReducer = (state = {profiles: []}, action) => {
  let newState

  switch(action.type){
    case 'UPVOTE_PROFILE':
      newState = state.map(profile => {
        if (profile.id === action.profileId){
          return {...profile, votes: ++profile.votes}
        } else {
          return profile
        }
      })
      return newState
    case 'DOWNVOTE_PROFILE':
      newState = state.map(profile => {
        if (profile.id === action.profileId && profile.votes > 0){
          return {...profile, votes: --profile.votes}
        } else {
          return profile
        }
      })
      return newState
    default: return state
  }
}
