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
          className={(isActive) =>
            isActive ? "header__title-is-active" : "header__title"
          }
        >
          AUTOAQUAPONICS
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="/Pages/VideoFeed"
          className={(isActive) =>
            isActive ? "videoFeed-is-active" : "header__nav"
          }
        >
          Video Feed
        </NavLink>
        <NavLink
          to="/Pages/Dashboard"
          className={(isActive) =>
            isActive ? "header__nav" : "header__nav"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/Pages/ControlPanel"
          className={(isActive) =>
            isActive ? "controlPanel-is-active" : "header__nav"
          }
        >
          Control Panel
        </NavLink>
        <NavLink
          to="/Pages/Settings"
          className={(isActive) =>
            isActive ? "settings-is-active" : "header__nav"
          }
        >
          Settings
        </NavLink>
      </Grid>

      <Grid>
        <button className="button-18" role="button">
          LOGIN
        </button>
      </Grid>
    </Grid>
  );
};
export default NavBar;
