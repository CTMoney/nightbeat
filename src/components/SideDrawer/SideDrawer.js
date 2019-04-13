import React from "react";
import "./DrawerToggleButton";
import "../Toolbar/Toolbar.css";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/"><i>Dashboard</i></a>
        </li>
        <li>
          <a href="/create"><i>Create Task</i></a>
        </li>
        <li>
          <a href="/profiles"><i>Billing Profiles</i></a>
        </li>
        <li>
          <a href="/proxy"><i>Proxies</i></a>
        </li>
        <li>
          <a href="/settings">
            <i className="fas fa-cog">Settings</i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
