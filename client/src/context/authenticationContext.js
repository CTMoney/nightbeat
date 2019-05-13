import React from 'react';

export const AuthenticationContext = React.createContext();

export const AuthenticationProvider = (props) => {
  const [authenticatedUser, setAuth] = React.useState()

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