import React, { Component, Fragment } from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import Container from "./components/Container/Container";
import Task from './components/Task/Form';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Toolbar />
        <Container task={Task}>
        </Container>
      </Fragment>
    );
  }
}

export default App;
