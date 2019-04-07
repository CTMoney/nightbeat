import React, { Component, Fragment } from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import Container from "./components/Container/Container";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Toolbar />
        <Container />
      </Fragment>
    );
  }
}

export default App;
