import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Splash from './pages/Splash'
import Register from './pages/Account/Register'
import Login from './pages/Account/Login'
import FourOhFour from './pages/404'
import { AuthenticationContext } from './context/authenticationContext';



class App extends React.Component {

  AuthCheck = () => {
    let {authenticated, userInfo} = this.context
    if (authenticated && userInfo) {
      return (
        <Dashboard />
      )
    } else if (authenticated && !userInfo) {
      return <FourOhFour />
    } else if (!authenticated) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={FourOhFour} />
          </Switch>
        </Router>
      )
    }
  }

  render() {
    return (
      this.AuthCheck()
    )
  }
}
App.contextType = AuthenticationContext
export default App
