import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from '../../../util/API'

class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    redirectTo: null
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

  handleRegistration = (event) => {
    event.preventDefault()
    const { email, username, password } = this.state
    API.register(email, username, password, this.handleRedirect)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <form onSubmit={this.handleRegistration}>
          <div className='form-group'>
            <label className='text-white' htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              name='email'
              value={this.state.email}
              onChange={this.handleInput}
              placeholder='Enter email'
            />
          </div>
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

export default Register
