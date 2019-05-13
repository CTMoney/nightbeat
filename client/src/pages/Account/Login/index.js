import React from 'react'
import { Redirect } from 'react-router-dom'
import API from '../../../util/API'
import { AuthenticationContext } from '../../../context/authenticationContext'



const Login = (props) => {

  const [authenticatedUser, login] = React.useContext(AuthenticationContext)
  const [username, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [redirectTo, setRedirectTo] = React.useState(null)



  const handleInput = event => {
    event.preventDefault()
    const { name, value } = event.target
    if (name == 'username') {
      setUser(value)
    } else if (name == 'password') {
      setPassword(value)
    }
  }

  const handleRedirect = (page) => {
    setRedirectTo(page)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    API.login(username, password, handleRedirect)
      .then(userInfo => {
        console.log('\n\n\n', userInfo, '\n\n\n')
        console.log('\n\n\n', authenticatedUser, '\n\n\n')
        login(userInfo)
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