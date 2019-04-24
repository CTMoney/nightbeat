import React, { Component } from 'react'
import Container from './components/Container/Container'
import Navbar from './components/navbar/Navbar'
import Splash from './components/pages/splash'
import Account from './components/pages/Create/Account.js'

class App extends Component {
  render() {
    return (
      <>
      <Splash />
      <Account />
      </>
    )
  }
}

export default App
