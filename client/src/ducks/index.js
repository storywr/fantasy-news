import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import players from './players'

export default combineReducers({
    players,
    routing: routerReducer
})