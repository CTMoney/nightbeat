import React, { Component, Fragment } from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import Container from "./components/Container/Container";
<<<<<<< HEAD
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop'
=======

>>>>>>> 6e9b84bcc93614aa0174bef801f83a81e74b47a3

class App extends Component {


  state = {
sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
this.setState((prevState) => {
return {sideDrawerOpen: !prevState.sideDrawerOpen}
});
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backDrop ;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <Fragment>
        <div style={{height: '100$'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
        <main style={{marginTop: '64px'}}>
        <Container />
        </main>
        

        </div>
      </Fragment>
    );
  }
}

export default App;
