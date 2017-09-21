import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './containers/App/index'

export default function (store) {
  return (
    <Route location='history' path='/' component={App} >
    </Route>
  )
}
