import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./index.css"
import {AuthenticationProvider} from './context/authenticationContext'
ReactDOM.render(
  (
    <AuthenticationProvider>
      <App />
      </AuthenticationProvider>
  ),
  document.getElementById('root'))
