import React from 'react'
import PropTypes from 'prop-types'
import MiniDrawer from './containers/MiniDrawer/index'
import './App.css'

const App = ({ children }) => (
  <MiniDrawer>
    {children}
  </MiniDrawer>
)

App.propTypes = {
  children: PropTypes.node
}

App.defaultProps = {
  children: null
}

export default App