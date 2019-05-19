import React from 'react'
import { Redirect } from 'react-router-dom'
import API from '../../../util/API'
import { AuthenticationContext } from '../../../context/authenticationContext'
import './Register.css'

const Register = (props) => {

  let { authenticated, userInfo, login } = React.useContext(AuthenticationContext)
  let [redirectTo, setRedirectTo] = React.useState()
  let [registrationFormData, setregistrationFormData] = React.useState({
    email: '',
    username: '',
    password: ''
  })
  const { email, username, password } = registrationFormData

  const handleInput = event => {
    setregistrationFormData({
      ...registrationFormData, [event.target.name]: event.target.value
    })
  }

  const handleRegistration = event => {
    event.preventDefault()
    API.register(email, username, password)
      .then(res => {
        setRedirectTo('/login')
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    redirectTo ?
      <Redirect to={{ pathname: redirectTo }} />
      :

      <div className="container-register">
        <p> Register</p>
        <form onSubmit={handleRegistration}>
          <div className='form-group'>
            <label className='text-white' htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              name='email'
              value={email}
              onChange={handleInput}
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
              value={username}
              onChange={handleInput}
              placeholder='Enter username'
            />
          </div>
          <div className='form-group'>
            <label className='text-white' htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={handleInput}
              placeholder='Enter password'
            />
          </div>


          <button type='submit' className='btn btn-primary'>
            Submit
      </button>
        </form>
      </div>
  )
}

export default Register
