

import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "../CSS/NavBar.css";
import DrawerComp from "./DrawerComp";
import { useMediaQuery, useTheme } from "@mui/material";

export const NavBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('600')) || window.innerWidth < window.innerHeight;

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
          AUTOAQUAPONICS
        </NavLink>
      </Grid>

      { !isMatch &&
        <Grid
        item
        order={{sm: 3, md: 2}}
        md={6.5}
        lg={8}
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
      </Grid> }

      <Grid order={{xs: 3, sm:2, lg: 3}}>
        <button className="button-18">
          Login
        </button>
      </Grid>

      { isMatch &&
      <Grid order={{xs: 0, lg: 3}}>
        <DrawerComp />

      </Grid> }
    </Grid>
  );
};
export default NavBar;