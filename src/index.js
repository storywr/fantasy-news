import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import store, { history } from './store'
import routes from './routes'

const hashLinkScroll = () => {
  const { hash } = window.location
  if (hash !== '') {
    setTimeout(() => {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) element.scrollIntoView()
    }, 0)
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes(store)} onUpdate={hashLinkScroll} />
  </Provider>,
  document.getElementById('root')
)