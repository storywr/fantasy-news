import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import players from './players'
import profile from './profile'

export default combineReducers({
    players,
    profile,
    routing: routerReducer
})