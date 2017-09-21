import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { createTracker } from 'redux-segment'

import rootReducer from './ducks'

const tracker = createTracker()

const createStoreWithThunk = applyMiddleware(
  thunkMiddleware,
  tracker
)(createStore)

const store = createStoreWithThunk(rootReducer,
  window.devToolsExtension &&
  window.devToolsExtension(),
)
export const history = syncHistoryWithStore(browserHistory, store)

export default store