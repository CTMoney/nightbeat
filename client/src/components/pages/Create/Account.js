import React, { Component } from 'react'
import API from '../../../util/API'

class CreateAccount extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    response: ''
  }

  handleInput = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleAccountCreation = (event) => {
    event.preventDefault()
    const {email, username, password} = this.state

    API.registerAccount(email, username, password)
    .then(res => this.setState({response: res}))
  } 

  render() {
    return (
      <form onSubmit={this.handleAccountCreation}>
        <div className='form-group'>
          <label className='text-white' for='email'>Email address</label>
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
          <label className='text-white' for='username'>
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
          <label className='text-white' for='password'>Password</label>
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

export default CreateAccount
