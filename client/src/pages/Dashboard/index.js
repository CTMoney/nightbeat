import React from 'react'
import BrowserRouter, { Router, Route } from 'react-router-dom'
import CreateTask from './CreateTask'
import Splash from '../Splash'
import Profiles from './Profiles'
import Settings from './Settings'
import DashNav from './DashNav'
import Proxies from './Proxy'
import Home from './Home'

const Container = () => {
    return (
        <>
            <DashNav />
            <div className='container'>
                <label htmlFor='bigJumbo' className='display-4 mt-5 text-white'>NightBeat</label>
                <div name='bigJumbo' className='jumbotron text-white bg-dark shadow'>
                    <Router>
                        <Route exact path='/' component={Home} />
                        <Route path='/proxy' component={Proxies} />
                        <Route path='/profiles' component={Profiles} />
                        <Route path='/create' component={CreateTask} />
                        <Route path='/settings' component={Settings} />
                        <Route path='/splash' component={Splash} />
                    </Router>
                </div>
            </div>
        </>
    )
}

export default Container