import React, { Component, Fragment } from 'react';
import Navbar from "./components/Navbar";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container />
      </Fragment>
    );
  }
}

export default App;
