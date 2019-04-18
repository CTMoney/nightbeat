import React, { Component } from 'react'
import Container from './components/Container/Container'
import Navbar from './components/navbar/Navbar'


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container />
      </>
    )
  }
}

export default App
