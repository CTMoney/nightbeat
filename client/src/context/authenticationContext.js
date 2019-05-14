import React from 'react';

export const AuthenticationContext = React.createContext();

export const AuthenticationProvider = (props) => {
  const [authenticatedUser, setAuth] = React.useState({
    authenticated: true,
    userInfo: { username: 'yserbane', sid: 'eforwek4rf24%R@#' }
  })

  const login = userInfo => {
    setAuth({
      authenticated: true,
      userInfo: userInfo
    })
  }

  return (
    <AuthenticationContext.Provider value={[authenticatedUser, login]}>
      {props.children}
    </AuthenticationContext.Provider>
  )
}