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
      justifyContent="center"
      columns={12}
    >
      <Grid
        xs={10}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        columns={11}
      >
        <Grid order={1}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__title-is-active" : "header__title"
            }
          >
            AUTOAQUAPONICS
          </NavLink>
        </Grid>

        <Grid
          order={{xs: 3, lg: 2}}
          xs={12}
          lg="auto"
          container
          direction="row"
          justifyContent="space-evenly"
        >
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

        <Grid order={{xs: 2, lg: 3}}>
          <button className="button-18" role="button">
            Login
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default NavBar;
