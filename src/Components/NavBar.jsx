import React from "react";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import "../CSS/NavBar.css";

export const NavBar = () => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__bar">
          <NavLink
            to="/"
            className={(isActive) =>
              isActive ? "header__nav is-active" : "header__nav"
            }
          >
            AutoAquaponics
          </NavLink>
          <NavLink
            to="/Pages/VideoFeed"
            className={(isActive) =>
              isActive ? "header__nav is-active" : "header__nav"
            }
          >
            Video Feed
          </NavLink>
          <NavLink
            to="/Pages/Dashboard"
            className={(isActive) =>
              isActive ? "header__nav is-active" : "header__nav"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/Pages/ControlPanel"
            className={(isActive) =>
              isActive ? "header__nav is-active" : "header__nav"
            }
          >
            Control Panel
          </NavLink>
          <NavLink
            to="/Pages/Settings"
            className={(isActive) =>
              isActive ? "header__nav is-active" : "header__nav"
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
