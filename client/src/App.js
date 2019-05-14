import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Splash from './pages/Splash'
import Register from './pages/Account/Register'
import Login from './pages/Account/Login'
import FourOhFour from './pages/404'
import { AuthenticationContext } from './context/authenticationContext';



class App extends React.Component {
  state = {

  }
  componentDidMount() {
    let { authenticated, userInfo } = this.context[0]
    this.setState({
      authenticated,
      userInfo
    })
  }
  AuthCheck = () => {
    if (this.state.authenticated && this.state.userInfo) {
      return (
        <Dashboard />
      )
    } else if (this.state.authenticated && !this.state.userInfo) {
      return <FourOhFour />
    } else if (!this.state.authenticated) {
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
