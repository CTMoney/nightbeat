import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateTask from './CreateTask'
import Container from './Container'
import Profiles from './Profiles'
import Settings from './Settings'
import DashNav from './DashNav'
import Proxies from './Proxy'
import Home from './Home'

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <Container>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/proxy' component={Proxies} />
          <Route path='/profiles' component={Profiles} />
          <Route path='/create' component={CreateTask} />
          <Route path='/settings' component={Settings} />
        </Router>
      </Container>
    </>
  )
}

export default Dashboard