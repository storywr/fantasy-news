// Action types

const LIST = 'FETCH_PROFILE_LIST_SUCCESS'
const FETCH_SINGLE = 'FETCH_PROFILE'
const FETCH_SINGLE_SUCCESS = 'FETCH_PROFILE_SUCCESS'

// Reducer

const initialState = {
  profile: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST:
      return action.profile.playerProfile
    default:
      return state;
  }
}

// Action creators

export function fetchProfile(profile) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ profile })
  };

  return dispatch => {
    return fetch('/api/profiles', request)
      .then(response => (response.json()))
      .then(profile => dispatch({ type: LIST, profile }))
      .catch(console.log)
  }
}

// Selectors

export const selectPlayerList = state => state.players.players.players