import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Task from "./Task/Task"
import Proxy from "./Proxy/Proxy"
import Profiles from "./Profiles/Profiles"

const Container = () => {
    return (
        <div className="container">
            <label htmlFor="bigJumbo" className="display-4 mt-5 text-white">NightBeat</label>
            <div name="bigJumbo" className="jumbotron text-white bg-dark shadow">
            <Router>
                <Route exact path="/" component={Task} />
                <Route path="/proxy" component={Proxy} />
                <Route path="/profiles" component={Profiles} />
            </Router>
            </div>
        </div>
    )
}

export default Container