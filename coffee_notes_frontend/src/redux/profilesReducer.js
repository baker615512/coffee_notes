export const profilesReducer = (state = {profiles: []}, action) => {

  switch(action.type){
    default: 
      return {...state}
}
}

//case 'DOWNVOTE_PROFILE':
    //  newState = state.map(profile => {
    //    if (profile.id === action.profileId && profile.votes > 0){
    //      return {...profile, votes: --profile.votes}
    //    } else {
    //      return profile
    //    }
    //  })
    //  return newState