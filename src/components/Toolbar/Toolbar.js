import React from 'react';
import './Toolbar.css'; 
import DrawerBtn from '../SideDrawer/DrawerToggleButton'


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerBtn click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"  />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/create">Create task</a></li>
                    <li><a href="/overview">Task view</a></li>
                    <li><a href="/profiles">Billing Profiles</a></li>
                    <li><a href="/proxy">Proxies</a></li>
                    <li><a href="/settings"><i className="fas fa-cog"></i></a></li>
                </ul>
            </div>
        </nav>
    </header>
);
 
export default toolbar;