import React from 'react';

export const DeauthenticationContext = React.createContext();

export const DeauthenticationProvider = (props) => {
  const [deauthenticatedUser, setDeauth] = React.useState('')

  const logout = () => {
    setDeauth({
      authenticated: false,
      userInfo: null
    })
  }


  return (
    <DeauthenticationContext.Provider value={[deauthenticatedUser, logout]}>
      {props.children}
    </DeauthenticationContext.Provider>
  )
}