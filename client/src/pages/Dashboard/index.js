import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateTask from './CreateTask'
import Splash from '../Splash'
import Register from '../Account/Register'
import Login from '../Account/Login'
import Profiles from './Profiles'
import Settings from './Settings'
import DashNav from './DashNav'
import Proxies from './Proxy'
import Home from './Home'

class Container extends React.Component {
    state = {
        redirectTo: null,
        loggedIn: false,
        username: null
    }



    updateUser(userObject) {
        this.setState(userObject)
    }

    render() {
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
                            <Route path='/login' render={() => <Login updateUser={this.updateUser} />} />
                            <Route path='/register' component={Register} />
                        </Router>
                    </div>
                </div>
            </>
        )
    }
}

export default Container