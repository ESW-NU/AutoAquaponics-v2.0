import React from 'react'
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import '../CSS/header.css'

export const NavBar = () => {
  return (
    <header className="header">
    <div className="content-container">
      <div className="header__bar">
      <NavLink
          to="/"
          className="header__title"
          activeClassName="is-active"
          exact={true}
        >
          AutoAquaponics
        </NavLink>
        <NavLink
          to="/Pages/VideoFeed"
          className="header__nav"
          activeClassName="is-active"
          exact={true}
        >
          Video Feed
        </NavLink>
        <NavLink
          to="/Pages/Dashboard"
          className="header__nav"
          activeClassName="is-active"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/Pages/ControlPanel"
          className="header__nav"
          activeClassName="is-active"
        >
          Control Panel
        </NavLink>
        <NavLink
          to="/Pages/Settings"
          className="header__nav"
          activeClassName="is-active"
        >
          Settings
        </NavLink>
      </div>
    </div>
  </header>
  );
}
export default NavBar;
