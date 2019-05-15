import React from 'react'
import { Redirect } from 'react-router-dom'
import API from '../../../util/API'
import { AuthenticationContext } from '../../../context/authenticationContext'

const Login = (props) => {

  let { authenticated, userInfo, login } = React.useContext(AuthenticationContext)
  let [redirectTo, setRedirectTo] = React.useState()
  let [loginForm, setLoginForm] = React.useState({
   username: '',
   password: ''
 })
const {username, password} = loginForm

  const handleInput = event => {
    setLoginForm({
      ...loginForm, [event.target.name]: event.target.value
    })

  }

  const handleLogin = (event) => {
    event.preventDefault()
    console.log('handling the login');

    API.login(username, password)
      .then(userInfo => {
        console.log(userInfo);
        login(userInfo)
        setRedirectTo('/')
        sessionStorage.setItem('authenticatedUser', true)
        sessionStorage.setItem('userInfo', userInfo)
      })
      .catch(err => console.log(err))
  }



  return (
    redirectTo ?
      <Redirect to={{ pathname: redirectTo }} />
      :
      <form onSubmit={handleLogin}>
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
  )
}
export default Login;