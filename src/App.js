import React, { Component, Fragment } from 'react';
import Navbar from "./components/Navbar";
import Form from "./components/Task/Form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Form />
      </Fragment>
    );
  }
}

export default App;
