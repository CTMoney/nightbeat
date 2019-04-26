import React, { Component } from 'react'
import Container from './components/Container/Container'
import Navbar from './components/navbar/Navbar'
import CreateAccount from './components/pages/Create/Account'
import Splash from './components/pages/splash'


class App extends Component {
  render() {
    return (
      <>
      {/* <Container /> */}
      {/* <Navbar /> */}
      <Splash/>
      </>
    )
  }
}

export default App
