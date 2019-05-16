import React from 'react'
import './Toolbar.css'
import DrawerBtn from '../SideDrawer/DrawerToggleButton'
import { AuthenticationContext } from '../../../../context/authenticationContext'

const toolbar = props => {
  let { authenticated, userInfo, login } = React.useContext(AuthenticationContext)
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle-button">
          <DrawerBtn click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo"><a href="/">{userInfo.toUpperCase()} feels the </a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/create">Create Task</a></li>
            <li><a href="/profiles">Billing Profiles</a></li>
            <li><a href="/proxy">Proxies</a></li>
            <li><a href="/settings"><i className="fas fa-cog"></i></a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default toolbar