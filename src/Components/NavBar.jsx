import React from "react";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import Grid from "@mui/material/Grid";
// import Item from "@mui/material/Item";
import "../CSS/NavBar.css";

export const NavBar = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__title-is-active" : "header__title"
          }
        >
          AUTOAQUAPONICS
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="/video-feed"
          className={({ isActive }) =>
            isActive ? "header__nav-is-active" : "header__nav"
          }
        >
          Video Feed
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "header__nav-is-active" : "header__nav"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/control-panel"
          className={({ isActive }) =>
            isActive ? "header__nav-is-active" : "header__nav"
          }
        >
          Control Panel
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "header__nav-is-active" : "header__nav"
          }
        >
          Settings
        </NavLink>
      </Grid>

      <Grid>
        <button className="button-18" role="button">
          Login
        </button>
      </Grid>
    </Grid>
  );
};
export default NavBar;
