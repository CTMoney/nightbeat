import React, { useState } from 'react';
export const AuthenticationContext = React.createContext();

export const AuthenticationProvider = (props) => {
  let authenticatedUser = false
  let authenticatedUserInfo = null
  if (sessionStorage.getItem('authenticatedUser') && sessionStorage.getItem('userInfo')) {
    authenticatedUser = sessionStorage.getItem('authenticatedUser')
    authenticatedUserInfo = sessionStorage.getItem('userInfo')
  }
  const [authenticated, setAuth] = useState(authenticatedUser);
  const [userInfo, setUserInfo] = useState(authenticatedUserInfo);

  const login = userInfo => {
    setAuth(true)
    setUserInfo(userInfo)
  }

  return (
    <AuthenticationContext.Provider value={{
      authenticated,
      userInfo,
      login: (userInfo) => login(userInfo)
    }}
      >
      {props.children}
    </AuthenticationContext.Provider>
  )
}
