// Action types

const LIST = 'FETCH_PLAYER_LIST_SUCCESS'
const FETCH_SINGLE = 'FETCH_PLAYER'
const FETCH_SINGLE_SUCCESS = 'FETCH_PLAYER_SUCCESS'

// Reducer

const initialState = {
  players: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST:
      return { ...state, players: { ...state.players, players: action.players.players.player } }

    case FETCH_SINGLE:
      return { ...state, active: { ...state.active, id: action.id } }

    case FETCH_SINGLE_SUCCESS:
      return { ...state, active: { ...state.active, response: action.response } }

    default:
      return state
  }
}

// Action creators

export const fetchPlayers = () => {
  return dispatch => {
    return fetch('/api/players')
      .then(response => response.json())
      .then(players => dispatch({ type: LIST, players }))
      .catch(console.log)
  }
}

// Selectors

export const selectPlayerList = state => state.players.players.players