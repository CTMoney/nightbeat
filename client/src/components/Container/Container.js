import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Dashboard from "./Dashboard"
import Proxies from "./Proxy"
import Profiles from "./Profiles"
import CreateTask from "./CreateTask"
import Settings from "./Settings"
import Splash from "../pages/splash"

const Container = () => {
    return (
        <div className="container">
            <label htmlFor="bigJumbo" className="display-4 mt-5 text-white">NightBeat</label>
            <div name="bigJumbo" className="jumbotron text-white bg-dark shadow">
            <Router>
                <Route exact path="/" component={Dashboard} />
                <Route path="/proxy" component={Proxies} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/create" component={CreateTask} />
                <Route path="/settings" component={Settings} />
                <Route path="/splash" component={Splash} />
            </Router>
            </div>
        </div>
    )
}

export default Container