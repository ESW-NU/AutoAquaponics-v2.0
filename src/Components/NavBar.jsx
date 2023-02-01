import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "../CSS/NavBar.css";

export const NavBar = () => {
  return (
    <Grid
      className="header__bar"
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
          AutoAquaponics
        </NavLink>
      </Grid>

      <Grid
        item
        order={{xs: 3, lg: 2}}
        xs={12}
        lg={8}
        container
        direction="row"
        justifyContent="space-evenly"
      >
        <NavLink
          to="/video-stream"
          className={({ isActive }) =>
            isActive ? "header__nav-is-active" : "header__nav"
          }
        >
          Video Stream
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
          to="/control-panel/tolerances"
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
        <button className="button-18">
          Login
        </button>
      </Grid>
    </Grid>
  );
};
export default NavBar;
