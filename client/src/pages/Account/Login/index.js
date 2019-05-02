import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from '../../../util/API'

class Login extends Component {
  state = {
    username: '',
    password: '',
    redirect: null
  }

  handleInput = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleRedirect = (page) => {
    this.setState({
      redirectTo: page
    })
  }

  handleLogin = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    API.login(username, password, this.handleRedirect)
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <form onSubmit={this.handleLogin}>
          <div className='form-group'>
            <label className='text-white' htmlFor='username'>
              Username
          </label>
            <input
              type='text'
              className='form-control'
              name='username'
              value={this.state.username}
              onChange={this.handleInput}
              placeholder='Enter username'
            />
          </div>
          <div className='form-group'>
            <label className='text-white' htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              value={this.password}
              onChange={this.handleInput}
              placeholder='Enter password'
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
        </button>
        </form>
      )
    }
  }
}

export default Login;