import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './App'
import PlayerProfile from './components/PlayerProfile/index'

export default function (store) {
  return (
    <Route location='history' path='/' component={App} onEnter={App.enter(store)} >
      <Route path="/players/:id" component={PlayerProfile} />
    </Route>
  )
}
